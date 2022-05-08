import React, { useEffect } from "react";
import PortData from "./portdata.json";
import { useState } from "react";
import Post from "./Post";
import Filter from "./Filter";
import { motion, AminatePresence, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState(0);

  useEffect(() => {
    const data = PortData;
    setPosts(data);
    setFiltered(data);
  }, []);

  return (
    <div className="container mx-auto py-16">
      <Filter
        posts={posts}
        setFiltered={setFiltered}
        setActiveCat={setActiveCat}
        activeCat={activeCat}
      />
      <div className="portfolio-items lg:container masonry-3-col mx-auto gap-10">
        <AnimatePresence>
          {filtered.map((post) => {
            return <Post key={post.id} post={post} posts={posts} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;