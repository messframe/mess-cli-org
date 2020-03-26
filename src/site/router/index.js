import Vue from "vue";
import Router from "vue-router";
import {routesArr} from '../doc/component.js';
import Changelog from "../doc/changelog.md";
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
                    path: "changelog",
                    name: "changelog",
                    component: Changelog,
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
