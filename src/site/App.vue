<template>
    <demo-layout>
        <template slot="header">
            <demo-header></demo-header>
        </template>
        <router-view></router-view>
        <template slot="left">
            <demo-left></demo-left>
        </template>
    </demo-layout>
</template>

<script>
    import DemoLayout from "./module/demo-layout";
    import DemoLeft from "./module/demo-left";
    import DemoHeader from './module/demo-header';
    export default {
        name: "app",
        components: {DemoLeft, DemoLayout, DemoHeader},
    };
</script>
<style lang="scss">
.demo-anchor {
    display: none
}
</style>