import React from "react";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="sgcreator-hook">
      <Categories />
      <section className="sgcreator-visualization">
        <h1>Select a category to Get Started &#9876;</h1>
      </section>
    </div>
  );
};

export default Home;
