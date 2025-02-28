import MainLayout from "@/MainLayout";
import PageQuotas from "@/pages/PageQuotas";
import PageBrigadiers from "@/pages/PageBrigadiers";
import PageEvents from "@/pages/PageEvents";
import PageMain from "@/pages/PageMain";
import PageNotFound from "@/pages/PageNotFound";
import PageSalaries from "@/pages/PageSalaries";
import { createBrowserRouter } from "react-router";
import PagePersons from "@/pages/PagePersons";

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
            { path: "/persons", element: <PagePersons /> },
            { path: "/quotas", element: <PageQuotas /> },
            { path: "*", element: <PageNotFound /> },
         ],
      },
   ],
   { basename: "/" },
);
