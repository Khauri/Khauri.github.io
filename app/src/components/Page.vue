<template>
    <div class="page">
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide(){
        return {
            page : this
        }
    },
    props : {
        isHidden : {
            default : false, 
            type : Boolean
        }
    },
}
</script>

<style>
    .page {
        position : relative;
        width : 100%;
        height : 100%;
        overflow-y : auto;
        /* Positioning */
        display : flex;
        flex-direction : column;
        align-items: center;
    }
</style>
