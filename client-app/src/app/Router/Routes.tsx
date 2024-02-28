import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/activities/Home/HomePage";
import ActivityDasboard from "../../features/activities/dashboard/ActivityDasboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'activities', element: <ActivityDasboard/>},
            {path: 'activities/:id', element: <ActivityDetails/>},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>},
        ]
    },
]

export const router = createBrowserRouter(routes);