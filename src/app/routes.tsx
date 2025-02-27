import MainLayout from "@/MainLayout";
import PageActivists from "@/pages/PageActivists";
import PageBrigadiers from "@/pages/PageBrigadiers";
import PageEvents from "@/pages/PageEvents";
import PageMain from "@/pages/PageMain";
import PageNotFound from "@/pages/PageNotFound";
import PageSalaries from "@/pages/PageSalaries";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <MainLayout />,
         children: [
            { path: "/", element: <PageMain /> },
            { path: "/brigadiers", element: <PageBrigadiers /> },
            { path: "/salaries", element: <PageSalaries /> },
            { path: "/events", element: <PageEvents /> },
            { path: "/activists", element: <PageActivists /> },
            { path: "*", element: <PageNotFound /> },
         ],
      },
   ],
   { basename: "/" },
);
