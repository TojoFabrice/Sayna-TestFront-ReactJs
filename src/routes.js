import Dashboard from "./views/Dashboard";
import Overview from "./views/Overview/Overview";

var myRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        // icon: "design_app",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/overview",
        name: "overview",
        // icon: "design_image",
        component: Overview,
        layout: "/admin",
    },
]

export default myRoutes;