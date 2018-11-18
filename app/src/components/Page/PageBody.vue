<template>
    <div class="page-body">
        <div class="page-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'page-body',
    inject : ['page']
}
</script>

<style>
.page-body {
    width : 100%;
    background : white;
    color : rgba(0,0,0,.8);
    margin-bottom : 20px;
    text-align : left;
    border-radius : 0 0 4px 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.page-content {
    padding : 5px 30px;
}
/** Decrease Padding on Smaller Screens **/
@media screen and (max-width: 780px){
    .page-content {
        padding : 5px 20px;
    }
}
</style>
