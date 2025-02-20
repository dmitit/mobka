import MainLayout from "@/MainLayout";
import PageBrigadiers from "@/pages/PageBrigadiers";
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
            { path: "/brigadiers", element: <PageBrigadiers /> },
            { path: "*", element: <PageNotFound /> },
         ],
      },
   ],
   { basename: "/" },
);
