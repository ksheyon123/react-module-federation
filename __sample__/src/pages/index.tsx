import { Layout } from "@/components/Layout";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <span>Home</span>
      <Link to="pagination">pagination</Link>
      {/* <Layout></Layout> */}
      <Outlet />
    </div>
  );
};

export { Home };
