import React from "react";

const Layout: React.FC = () => {
  const ComboBox = React.lazy(() => import("componentkit/ComboBox"));

  return (
    <div>
      Hi This is Layout
      <ComboBox />
    </div>
  );
};

export { Layout };
