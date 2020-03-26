import AutoScroll from "./src/index.vue";
AutoScroll.install = function(Vue) {
    Vue.component(AutoScroll.name, AutoScroll);
};
export default AutoScroll;
