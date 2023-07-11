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

const App = () => {
  const [curPage, setCurPage] = useState<number>(1);

  const onPageChange = (e: number) => {
    const page = e;
    setCurPage(page);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={{}}>
        <GlobalStyling />
        <Pagination
          curPage={curPage}
          totalPage={12}
          totalCount={12}
          onPageChange={onPageChange}
          pageSize={5}
          custromRender={(el) => (
            <div onClick={() => onPageChange(el)}>{el}x</div>
          )}
        />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
