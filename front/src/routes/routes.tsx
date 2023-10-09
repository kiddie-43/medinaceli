import {  useRoutes } from "react-router-dom";
import { Routes } from "../common/enums/routes";
import { BandaContainer } from "../pages/banda/container";
import { RehearsalContainer } from "../pages/rehearsal/container";

export const RoutesApp = () => {
    return useRoutes([
        {
            path: "/",
            element: <RehearsalContainer/>
        },
        {
            path: Routes.ENSAYOS,
            element: <RehearsalContainer/>
        },

        {
            path: Routes.BANDA,
            element: <BandaContainer/>
        }

    ])
}