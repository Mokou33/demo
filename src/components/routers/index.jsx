import Home from "../home";
import Serve from "../serve/index/serve";
import Cooperation from "../cooperation/index/cooperation";
import Classic from "../classic/index/classic";
import Recommend from "../recommend/index/recommend";
import Rare from "../rare/index/rare";
import Details from "../classic/details";


export const routers = [
    {
        path: '/',
        exact:true,
        component: Home
    },
    {
        path: '/serve',
        component: Serve
    },
    {
        path: '/cooperation',
        component: Cooperation
    },
    {
        path: '/classic/:id',
        exact:true,
        component: Classic,

    },
    {
        path: '/classic/details/:url',
        component: Details,
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/rare',
        component: Rare,
    }
]