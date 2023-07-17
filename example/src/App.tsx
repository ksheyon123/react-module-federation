import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Pagination } from "@/pages/Pagination";
import { Home } from "@/pages";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : content-box;
  }
  body {
    margin : 0px;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Outlet />
      </>
    ),
    loader: () => {
      return "";
    },
    children: [
      {
        path: "pagination",
        element: <Pagination />,
      },
    ],
  },
]);

const App = () => {
  return (
    // <React.StrictMode>
    //   <ThemeProvider theme={{}}>
    //     <GlobalStyling />
    <RouterProvider router={router} />
    //   </ThemeProvider>
    // </React.StrictMode>
  );
};

export default App;
