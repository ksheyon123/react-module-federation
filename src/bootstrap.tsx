// src/bootstrap.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>ComponentKit</h1>
      {/* 컴포넌트 미리보기나 문서화를 위한 내용 */}
    </div>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
