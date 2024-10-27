import { createBrowserRouter } from "react-router-dom";
import Header from "@widgets/Header/ui/Header";
import Home from "@pages/Home/ui/Home";
import MyPage from "@pages/MyPage/ui/MyPage";
import Channels from "@pages/Channels/ui/Channels";
import Games from "@pages/Games/ui/Games";
import Sport from "@pages/Sport/ui/Sport";
import Subscriptions from "@pages/Subscriptions/ui/Subscriptions";

const AppRouter = createBrowserRouter([
    {
        path: '/', element: (
            <>
                <Header />
                < Home />
            </>
        )
    },
    {
        path: 'my', element: (
            <>
                <Header />
                < MyPage />
            </>
        )
    },
    {
        path: 'subscriptions', element: (
            <>
                <Header />
                < Subscriptions />
            </>)
    },
    {
        path: 'channels', element: (
            <>
                <Header />
                < Channels />
            </>
        )
    },
    {
        path: 'sport', element: (
            <>
                <Header />
                < Sport />
            </>
        )
    },
    {
        path: 'games', element: (
            <>
                <Header />
                < Games />
            </>
        )
    },
])

export default AppRouter;