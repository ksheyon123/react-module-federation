import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Pagination } from "@/pages/Pagination";

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
    path: "/pagination",
    element: <Pagination />,
  },
]);

const App = (): JSX.Element => {
  const [curPage, setCurPage] = useState<number>(1);

  const onPageChange = (e: number) => {
    console.log(e);
    const page = e;
    setCurPage(page);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={{}}>
        <GlobalStyling />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
