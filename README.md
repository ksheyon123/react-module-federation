### Intro

> Customize React Pagination Component for learning how to create library.

### 2025/01/10 (Fri) Update

1. webpack.config.ts 추가

```
ㄴ config
    webpack.config.ts // 추가

```

2. package.json 추가

```
// package.json
{
  "dependencies": {
    // 기존 의존성 유지

    "@types/react-dom": "^18.0.10",
    "react-dom": "^18.2.0",
  },
  "devDependencies": {
    // 기존 devDependencies 유지
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1",
    "html-webpack-plugin": "^5.5.3",
    "ts-loader": "^9.4.4"
  },
  "scripts": {
    // 새로운 스크립트 추가
    "start": "webpack serve",
    "build": "webpack --mode production"
  }
}

```

3. tsconfig.json 업데이트

```
{
  "compilerOptions": {
    // 기존 설정 유지
    "jsx": "react-jsx", // jsx 설정 변경
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    // webpack을 위한 추가 설정
    "resolveJsonModule": true
  },
  "include": ["src"], // include 설정 추가
  "exclude": ["**/example", "node_modules"]
}

```

4. public/index.html 추가
5. main.ts & bootstap.tsx 추가

### 2025/01/13 (Mon) Update

`Uncaught Error : Shared module is not available for eager consumption` 발생

> 이슈 처리하기 위해 다양한 방법을 적용 했으나(index.html에 직접 script 작성 등) 해결 안됨.
> 원인은 내보내는 측에만 비동기 적용을 했으나, import 해서 사용하는 측에도 같은 처리 필요.

```
// src/index.ts

import("./bootstrap").catch((err) => {
  console.error("Error loading the app:", err);
});

// src/bootstrap.tsx

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// App.tsx

import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("host/App"));

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
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
```
