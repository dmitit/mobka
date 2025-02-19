import MainLayout from "@/MainLayout";
import PageCalendar from "@/pages/PageCalendar";
import PageMain from "@/pages/PageMain";
import PageNotFound from "@/pages/PageNotFound";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <MainLayout />,
         children: [
            { path: "/", element: <PageMain /> },
            { path: "/calendar", element: <PageCalendar /> },
            { path: "*", element: <PageNotFound /> },
         ],
      },
   ],
   { basename: "/" },
);
