import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import DemoBox from "./module/demo-box.vue";
import DemoMd from "./module/demo-md.vue";
import 'highlight.js/styles/ocean.css';
import "./style/markdown.scss";
import { Icon, DropdownMenu, DropdownItem, Dropdown } from 'element-ui';

Vue.use(Router);
Vue.use(Icon);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dropdown);
Vue.component('demo-box', DemoBox);
Vue.component('demo-md', DemoMd);
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App},
});