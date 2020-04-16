import Vue from "vue";
import Router from "vue-router";
import {routesArr} from '../doc/component.js';
import quickStart from "../doc/quickStart.md";
import Install  from "../doc/install.md";
import Introduce from "../doc/Introduce.md";
import DemoMd from "../module/demo-md";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/doc/introduce"
        },
        {
            path: "*",
            redirect: "/doc/introduce"
        },
        {
            path: "/doc",
            component: DemoMd,
            children: [
                {
                    path: "quickStart",
                    name: "quickStart",
                    component: quickStart,
                },
                {
                    path: "install",
                    name: "install",
                    component: Install,
                },
                {
                    path: "introduce",
                    name: "introduce",
                    component: Introduce,
                }
            ]
        },
        ...routesArr
    ]
});
