<template>
    <transition name="demo-transition-router" appear>
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "demo-transition-router"
    };
</script>
<style lang="scss">
.demo-transition-router {
    &-enter-active,&-leave-active {
        width: 100%;
        position: absolute;
        transition: 300ms;
        top: 0;
    }
    &-enter-active {
        transition-delay: 0ms;
    }
    &-enter,&-leave-to {
        opacity: 0;
    }
}
</style>