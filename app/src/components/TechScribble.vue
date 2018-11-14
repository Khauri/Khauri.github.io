<!-- Based on: https://codepen.io/loktar00/pen/LjCJn -->
<template>
    <div class="tech-scrib-container">
        <canvas ref="canvas" :width="width" :height="height"/>
    </div>
</template>

<script>

class Trace {
    constructor({
            x, y, 
            width = 300, height = 300, 
            speed = 4,
            angle, 
    }={}){
        this.width = width
        this.height = height
        this.x = x || Math.ceil((Math.random() * this.width) / 4) * 4
        this.y = y || Math.ceil((Math.random() * this.height) / 4) * 4
        this.points = []
        this.points.push({
            x: this.x,
            y: this.y,
            arc: 0
        })
        this.trapCount = 0;
        this.live = true;

        this.lastPoint = this.points[0];

        this.angle = angle || (Math.ceil((Math.random() * 360) / 45) * 45) * (Math.PI / 180);
        this.speed = speed;
    }

    update(ctx, traces, totalTraces, width, height){
        var x = this.lastPoint.x,
            y = this.lastPoint.y,
            dx = this.x - x,
            dy = this.y - y;

        // if its greater than .01 keep moving
        if (Math.random() > 0.01) {
            var velX = Math.cos(this.angle) * this.speed,
                velY = Math.sin(this.angle) * this.speed,
                checkPointX = this.x + (Math.cos(this.angle) * 8),
                checkPointY = this.y + (Math.sin(this.angle) * 8),
                imageData = ctx.getImageData(checkPointX, checkPointY, 3, 3),
                pxlData = imageData.data,
                collision = false;

            // check if its in bounds.
            if (checkPointX > 0 && checkPointX < this.width && checkPointY > 0 && checkPointY < this.height) {
                // check if the point in front is clear or not.
                for (var i = 0, n = pxlData.length; i < n; i += 4) {
                    var alpha = imageData.data[i + 3];

                    if (alpha !== 0) {
                        collision = true;
                        break;
                    }
                }
            } else {
                collision = true;
            }

            // no collision keep moving
            if (!collision) {
                this.trapCount = 0;
                this.x += velX;
                this.y += velY;
            } else {
                // collision, assume its not the end
                this.trapCount++;
                this.angle -= 45 * (Math.PI / 180);

                // line is fully trapped make sure to draw an arc and start a new trace.            
                if (this.trapCount >= 7) {
                    this.live = false;

                    if (traces.length < totalTraces) {
                        traces.push(new Trace({
                            cX: 0,
                            cY: 0
                        }));
                    }
                }

                if (Math.sqrt(dx * dx + dy * dy) > 4) {
                    this.points.push({
                        x: this.x,
                        y: this.y
                    });
                    this.lastPoint = this.points[this.points.length - 1];
                } else {
                    this.trapCount++;
                    this.x = this.lastPoint.x;
                    this.y = this.lastPoint.y;
                }
            }
        } else {
            // small chance we might just stop altogether.
            if (Math.random() > 0.9) {
                this.live = false;
            }

            // no collision clear any prev trap checks, change the direction and continue on.
            this.trapCount = 0;
            this.angle += 45 * (Math.PI / 180);

            if (Math.sqrt(dx * dx + dy * dy) > 4) {
                this.points.push({
                    x: this.x,
                    y: this.y,
                    width : this.width, 
                    height : this.height
                });
                this.lastPoint = this.points[this.points.length - 1];
            } else {
                this.x = this.lastPoint.x;
                this.y = this.lastPoint.y;
            }
        }
    }

    render(ctx) {
        // TODO: This keeps a list of points for each trace 
        // We can probably speed up render times by only keeping track of the last 
        // point and current point and then drawing a line.
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (var p = 1, plen = this.points.length; p < plen; p++) {
            ctx.lineTo(this.points[p].x, this.points[p].y);
        }
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.points[0].x, this.points[0].y, 4, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        if (!this.live) {
            ctx.beginPath();
            ctx.arc(this.points[plen - 1].x, this.points[plen - 1].y, 4, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
}
export default {
    name : 'tech-scribble',
    created(){
        this.traces = []
        this.traceNum = 0
        this.reqAnimFrameInstance = null
    },
    data(){
        return {
        }
    },
    props : {
        width : {
            default : 300,
            type : Number
        },
        height : {
            default : 300,
            type : Number
        },
        backgroundColor : {
            type : String
        },

        startTraces : {
            type : Number, 
            default : 20
        },

        restartAfter : {
            type : Number, 
            default : -1
        },

        totalTraces : {
            type : Number, 
            default : 100,
        },
        
        traceColor : {
            default : "#ffe99b",
            type : String
        },

        traceFillColor : {
            default : '#000',
            type : String
        },
    },

    computed : {
        ctx(){
            return this.$refs.canvas.getContext('2d')
        },
        canvas(){
            return this.$refs.canvas
        }
    },

    methods : {
        loop(){
            // TODO: Clearing the entire rect is unecessary(?)
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            this.traces.forEach(trace=>trace.render(this.ctx))
            this.traces.forEach(trace=>trace.live && trace.update(this.ctx, this.traces, this.totalTraces))
            
            this.reqAnimFrameInstance = requestAnimationFrame(this.loop)
        },

        reinit() {
            if(this.reqAnimFrameInstance){
                cancelAnimationFrame(this.reqAnimFrameInstance);
            }
            this.canvas.width = this.width
            this.canvas.height = this.height

            this.traces = []
            this.traceNum = this.startTraces

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            for (var b = 0; b < this.traceNum; b++) {
                this.traces.push(new Trace({
                    cX: 0,
                    cY: 0,
                    width : this.width,
                    height : this.height
                }))
            }

            this.ctx.strokeStyle = this.traceColor
            this.ctx.fillStyle = this.traceFillColor
            this.ctx.lineWidth = 2

            this.loop()
        }
    },

    mounted(){
        this.reinit()
        if(this.restartAfter > 0){
            this.interval = setInterval(this.reinit, this.restartAfter)
        }
    },

    beforeDestroy(){
        if(this.reqAnimFrameInstance){
            cancelAnimationFrame(this.reqAnimFrameInstance);
        }
        if(this.interval){
            clearInterval(this.interval)
        }
    }
}
</script>

<style scoped>
 .tech-scrib-container{
    display : flex;
    justify-content: center;
    align-items: center;
    z-index : 0;
 }
</style>
