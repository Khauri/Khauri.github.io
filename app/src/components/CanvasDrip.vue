<template>
    <div class="drip-container">
        <canvas ref="canvas" :width="width" :height="height"/>
        <h1 class="masked-text">driping with talent</h1>
    </div>
</template>

<script>

export default {
    data(){
        return {
            paint : []
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
        colors : {

        },
        totalPaints : {
            default : 15,
            type : Number
        },
        size : {
            default : 20,
            type : Number
        }
    },

    computed : {
        ctx(){
            return this.$refs.canvas.getContext('2d')
        }
    },

    methods : {
        randColorComponent(a, radius=5){
            return Math.min(255, 
                Math.max(0, 
                    (a-radius) + ~~(Math.random() * 2 * radius)
                )
            )
        },
        addPaint(){
            //Try 50 times (overkill)
            let i = 50, 
                size,
                x;
            while(i > 0){
                size = Math.random() * this.size + 10
                x = Math.random() * this.width

                //Dont Allow drips on top of each other (Overtaking drops destroy the prettyness)
                let found = this.paint.some(paint => {
                    return (( x + size > paint.x) && ( x - size < paint.x + paint.s ) ) ||
                    (( x - size < paint.x) && ( x + size > paint.x - paint.s ))
                });
                // Try again
                if(found){
                    i--;
                    continue;
                }
                let r = this.randColorComponent(35),
                    g = this.randColorComponent(0xce),
                    b = this.randColorComponent(0x8d)
                return this.paint.push({
                    s : size,
                    x : x,
                    y : -60,
                    v : (Math.random() * 2) + 2, 
                    c : `rgba(${r}, ${g}, ${b}, 1)`
                })
            }
        },
        drawPaint(x, y, size, colour) {
            let ctx = this.ctx
            ctx.beginPath();
            ctx.arc(x, y, size ,0 , Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle=colour;
            ctx.fill();
        },

        update(){
            for (let paint of this.paint){
                paint.y = paint.y + paint.v
                if (paint.y > this.height + 60){
                    this.paint = this.paint.filter(p => p != paint)
                    this.addPaint()
                }
                this.drawPaint(paint.x, paint.y, paint.s, paint.c)
            }
        }
    },

    mounted(){
        for (var i = 0; i < this.totalPaints; i++){
            this.addPaint();
        }
        this.interval = setInterval( this.update, 40 );
    },
    beforeDestroy(){
        clearInterval(this.interval)
    }
}
</script>

<style>
 .drip-container{
    position : absolute;
    top : 400px;
    width : 720px;
    align-self : center;
    z-index : -9;
    display : flex;
    justify-content: center;
    align-items: center;
 }
 .masked-text{
     font-size : 3.4em;
     position : absolute;
     top : 100px;
     color : rgb(224,224,224);
 }
</style>
