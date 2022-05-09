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
    <div className="lg:container lg:w-[1400px] mx-auto py-16">
      <Filter
        posts={posts}
        setFiltered={setFiltered}
        setActiveCat={setActiveCat}
        activeCat={activeCat}
      />
      <div className="portfolio-items lg:container lg:masonry-3-col md:masonry-2-col mx-auto">
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
