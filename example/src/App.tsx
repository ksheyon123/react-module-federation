import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Pagination } from "../../src/index";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : content-box;
  }
  body {
    margin : 0px;
  }
`;

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
        <Pagination
          curPage={curPage}
          // totalPage={12}
          totalCount={28}
          onPageChange={onPageChange}
          pageSize={5}
        />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
