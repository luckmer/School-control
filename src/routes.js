import Details from "./pages/Details.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Marks from "./pages/Marks.jsx";

export const routes = [
    { path: "/", Component: LandingPage, name: "home" },
    { path: "/marks", Component: Marks, name: "marks" },
    { path: "/details/:id", Component: Details, name: "details" },
];
