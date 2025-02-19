import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./pages/PageNotFound.tsx";
import PageMain from "./pages/PageMain.tsx";
import PageCalendar from "./pages/PageCalendar.tsx";

const router = createBrowserRouter(
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

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>,
);
