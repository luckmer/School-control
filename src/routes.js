import Details from "./pages/Details.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/404";
export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/details/:id", Component: Details, name: "details" },
    { path: "*", Component: NotFound, name: "notFound" },
];
