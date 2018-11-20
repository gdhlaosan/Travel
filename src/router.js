import Vue from "vue";
import Router from "vue-router";
// import Home from "@/pages/home/Home"
import City from "@/pages/city/City"
import Detail from "@/pages/detail/Detail"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import('@/pages/home/Home') //异步组件使用方法（项目很大的时候可以进行类似的拆分，很小的时候没必要）
        },{
            path: "/city",
            name: "City",
            component: City
        },{
            path: "/detail/:id",
            name: "Detail",
            component: Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
});
