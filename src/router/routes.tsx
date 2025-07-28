import { Contact } from "@/pages/Contact/Contact";
import { Home } from "@/pages/Home/Home";
import { Profile } from "@/pages/Profile/Profile";
import { Projects } from "@/pages/Projects/Projects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },

])