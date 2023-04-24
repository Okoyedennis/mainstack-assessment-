import React from "react";
import Header from "./Header";
import Graph from "./Graph";

const Body = () => {
  return (
    <div className="flex-[10] w-full h-[100vh] overflow-y-scroll">
      <Header />
      <Graph />
    </div>
  );
};

export default Body;
