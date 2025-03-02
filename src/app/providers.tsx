import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
   typography: {
      fontFamily: ["Bitter", "serif"].join(","),
   },
});

function AppProviders() {
   return (
      <>
         <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <Provider store={store}>
                  <RouterProvider router={router} />
               </Provider>
            </LocalizationProvider>
         </ThemeProvider>
      </>
   );
}

export default AppProviders;
