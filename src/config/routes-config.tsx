import {RouteType} from "../models/route-type";
import Main from "../components/pages/main";

export const PATH_MAIN = "/";

export const routes: RouteType[] = [
    {
        path: PATH_MAIN,
        element: <Main/>
    }
]