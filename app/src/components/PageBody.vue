<template>
    <article class="page-body">
        <div class="page-content">
            <slot></slot>
        </div>
    </article>
</template>

<script>
export default {
    inject : ['page']
}
</script>

<style>
    .page-body {
        max-width : 720px;
        width : 720px;
        background : white;
        color : rgba(0,0,0,.8);
        margin-bottom : 20px;
        text-align : left;
        border-radius : 0 0 4px 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    .page-content {
        padding : 5px 40px;
    }
</style>
