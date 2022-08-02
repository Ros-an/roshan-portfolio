import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Blogs.scss";

export interface AnimatedCardProps {
  y: number;
  opacity: number;
}
export interface BlogProps {
  description: string;
  imgUrl: any;
  blogLink: string;
  title: string;
  tags: string[] | [];
}
const Work = () => {
  const [blogs, setBlogs] = useState<BlogProps[] | []>([]);
  const [filterBlog, setFilterBlog] = useState<BlogProps[] | []>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
      setFilterBlog(data);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterBlog(blogs);
      } else {
        setFilterBlog(
          blogs.filter((blog) =>
            blog.tags.some((tag) => tag.toLowerCase() === item.toLowerCase())
          )
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Blog</span> Section
      </h2>

      <div className="app__blog-filter">
        {["All", "Web App", "React JS", "Javascript"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__blog-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__blog-portfolio"
      >
        {filterBlog.map((work, index) => (
          <div className="app__blog-item app__flex" key={index}>
            <div className="app__blog-img app__flex">
              <img src={String(urlFor(work.imgUrl))} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__blog-hover app__flex"
              >
                <a href={work.blogLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a> */}
              </motion.div>
            </div>

            <div className="app__blog-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__blog-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__blogs"),
  "blogs",
  "app__primarybg"
);
