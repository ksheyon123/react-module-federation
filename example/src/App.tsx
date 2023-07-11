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
  const onClick = (e: any) => {
    console.log(e);
    setCurPage(curPage);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={{}}>
        <GlobalStyling />
        <Pagination
          curPage={curPage}
          totalPage={3}
          totalCount={12}
          onClick={onClick}
          pageSize={5}
          render={(el) => <div>{el}x</div>}
        />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
