import { createBrowserRouter, useRoutes } from "react-router-dom";
import { Routes } from "../common/enums/routes";

export const RoutesApp = () => {
    return useRoutes([
        {
            path: Routes.ENSAYOS,
            element: <> hola mundo</>
        },

        {
            path: Routes.BANDA,
            element: <> hola listado</>
        }

    ])
}