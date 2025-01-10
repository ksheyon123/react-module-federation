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
    "rollup": "rollup -c",
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
