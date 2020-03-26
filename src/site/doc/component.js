import DevStep from './devStep/index.vue'
import Portal from './portal/index.vue'
import SubModule from './subModule/index.vue'
import CommonDep from './commonDep/index.vue'
import RegisterSubModule from './subModuleRegister/index.vue'
import DevMode from './devMode/index.vue'
import BuildMode from './buildMode/index.vue'
import Route from './route/index.vue'
import EventBus from './eventBus/index.vue'

const component = [
    {
        name: '基础'
    },
    {
        name: '构建步骤',
        component: DevStep,
        route: 'devStep',
    },
    {
        name: '核心服务',
        component: Portal,
        route: 'portal',
    },
    {
        name: '子模块',
        component: SubModule,
        route: 'subModule',
    },
    {
        name: '开发'
    },
    {
        name: '公共依赖抽离',
        component: CommonDep,
        route: 'commonDep',
    },
    {
        name: '注册一个子模块',
        component: RegisterSubModule,
        route: 'registerSubModule',
    },
    {
        name: '运行',
        component: DevMode,
        route: 'devMode',
    },
    {
        name: '路由',
        component: Route,
        route: 'route',
    },
    {
        name: '事件总线',
        component: EventBus,
        route: 'eventBus',
    },
    {
        name: '打包',
        component: BuildMode,
        route: 'buildMode',
    },
];

let routesArr = []
component.forEach(function(item){
    if (item.route) {
        item.path = `/${item.route}`;
        routesArr.push(item)
    }
});
export {
    component,
    routesArr
};