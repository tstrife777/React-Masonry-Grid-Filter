import React from "react";
import { useEffect } from "react";

function Filter({ setActiveCat, activeCat, setFiltered, posts }) {
  useEffect(() => {
    //console.log("Filter Page:" + activeCat);
    if (activeCat === 0) {
      setFiltered(posts);
      return;
    }
    const filtered = posts.filter((post) => post.tags.includes(activeCat));
    setFiltered(filtered);
  }, [activeCat]);

  return (
    <div className="filter-container flex p-5">
      <button
        onClick={() => setActiveCat(0)}
        className={"btn " + (activeCat === 0 ? "active" : "")}
      >
        All
      </button>

      <button
        onClick={() => setActiveCat("HTML")}
        className={"btn " + (activeCat === "HTML" ? "active" : "")}
      >
        HTML
      </button>

      <button
        onClick={() => setActiveCat("CSS")}
        className={"btn " + (activeCat === "CSS" ? "active" : "")}
      >
        CSS
      </button>

      <button
        onClick={() => setActiveCat("Javascript")}
        className={"btn " + (activeCat === "Javascript" ? "active" : "")}
      >
        Javascript
      </button>

      <button
        onClick={() => setActiveCat("React")}
        className={"btn " + (activeCat === "React" ? "active" : "")}
      >
        React
      </button>

      <button
        onClick={() => setActiveCat("Bootstrap")}
        className={"btn " + (activeCat === "Bootstrap" ? "active" : "")}
      >
        Bootstrap
      </button>
    </div>
  );
}

export default Filter;
