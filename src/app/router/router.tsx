import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "@widgets/Header/ui/Header";
import Home from "@pages/Home/ui/Home";
import MyPage from "@pages/MyPage/ui/MyPage";
import Channels from "@pages/Channels/ui/Channels";
import Games from "@pages/Games/ui/Games";
import Sport from "@pages/Sport/ui/Sport";
import Subscriptions from "@pages/Subscriptions/ui/Subscriptions";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <><Header /> <Outlet /></>
        ),
        children: [
            {
                path: '/', element: < Home />
            },
            {
                path: 'my', element: < MyPage />
            },
            {
                path: 'subscriptions', element: < Subscriptions />
            },
            {
                path: 'channels', element: < Channels />
            },
            {
                path: 'sport', element: < Sport />
            },
            {
                path: 'games', element: < Games />
            },
        ]
    }
])

export default AppRouter;