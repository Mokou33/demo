import Home from "../home";
import Serve from "../serve/index/serve";
import Cooperation from "../cooperation/index/cooperation";
import Classic from "../classic/index/classic";
import Recommend from "../recommend/index/recommend";
import Rare from "../rare/index/rare";


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
        path: '/classic',
        component: Classic
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/rare',
        component: Rare
    }
]