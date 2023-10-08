import { createBrowserRouter, useRoutes } from "react-router-dom";
import { Routes } from "../common/enums/routes";
import { BandaContainer } from "../pages/banda/container";
import { EnsayosContainer } from "../pages/ensayos/container";

export const RoutesApp = () => {
    return useRoutes([
        {
            path: "/",
            element: <EnsayosContainer/>
        },
        {
            path: Routes.ENSAYOS,
            element: <EnsayosContainer/>
        },

        {
            path: Routes.BANDA,
            element: <BandaContainer/>
        }

    ])
}