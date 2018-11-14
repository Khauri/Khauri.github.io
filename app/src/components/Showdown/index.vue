<!-- 
    Simple showdown Markdown Editor. 
    You got the preview mode and the editing mode
-->
<template>
    <div class="showdown-container">
        <div class="controls">
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="middle">
                <slot name="middle"></slot>
            </div>
            <div class="right">
                <button 
                    @click="previewShowing = !previewShowing">
                    {{previewShowing ? 'Editor' : 'Preview'}}
                </button>
                <button 
                    @click="emitResult()">
                    Submit
                </button>
            </div>
        </div>
        <div :class="['wrapper', `wrapper-${previewStyle}`]">
            <div class="editor" v-if="isShowingEditor">
                <textarea 
                    class="editor-textarea" 
                    v-model="text"/>
            </div>
            <div 
                :class="['preview', previewClass, previewStyle]" 
                v-if="isShowingPreview">
                    <article-view :inputArticle="article"/>
            </div>
        </div>
    </div>
</template>

<script>
import { ArticleView } from '../'
import showdown from 'showdown'

const converter = new showdown.Converter({
    parseImgDimensions : true,
    simplifiedAutoLink : true,
    literalMidWordUnderscores : true,
    strikethrough : true,
    tables : true,
    smoothLivePreview : true, // Togglable? 
    smartIndentationFix : true,
    ghMentions : true,
    metadata : true
})

export default {
    provide(){
        return {
            showdown : this
        }
    },
    computed : {
        article(){
            return {
                html : this.html
            }
        },
        html(){
            return converter.makeHtml(this.text)
        },

        previewStyle(){
            return `preview-${this.previewLocation.toLowerCase()}`
        },

        isShowingPreview(){
            return this.showPreview || this.previewShowing
        },

        isShowingEditor(){
            return this.showPreview || !this.previewShowing
        }
    },

    props : {
        showPreview : {
            type : Boolean,
            default : false,
        },
        previewClass : {
            type : String, 
            default : 'article'
        },
        previewWidth : {
            type : String, 
            default : ""
        },
        previewLocation : {
            type : String,
            default : 'right'
        },
        inputText : {
            type : String, 
            default : ''
        }
    },

    watch : {
        inputText(val){
            this.text = val
        }
    },

    data : function(){
        return {
            previewShowing : false,
            text : this.inputText
        }
    },
    methods : {
        emitResult : function(){
            this.$emit('submit', {
                text : this.text, 
                html : this.html
            })
        }
    }

}
</script>

<style scoped>
    .showdown-container {
        flex : 1;
        width : 100%;
        height : 100%;
        display : flex;
        flex-direction : column;
    }
    .controls {
        flex : 0;
        min-height : 50px;
        width : 100%;
        display : flex;
        align-items : center;
        justify-content: space-evenly;
    }
    .wrapper {
        display : flex;
        flex : 1;
        /* width : 100%;
        height : 100%; */
        flex-direction : column;
    }
    .wrapper-preview-left, .wrapper-preview-right {
        flex-direction : row;
    }
    .editor {
        flex : 1;
        order : 1;
        width : 100%;
        height : 100%;
        background : white;
        padding : 10px;
        border : 1px solid rgba(0,0,0,0.3);
        display : flex;
    }
    .editor-textarea {
        flex : 1;
        /* width : 100%;
        height : 100%; */
        background : transparent;
        border : 0px;
        font-size : 1em;
    }
    .preview { 
        flex : 1;
        order : 2;
        overflow : scroll;
    }
    .preview-left, .preview-top {
        order : 0;
    }
</style>
