import React, { Suspense } from "react";
const RemoteHeader = React.lazy(() => import("host/Header"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteHeader />
      </Suspense>
    </div>
  );
};

export default App;
