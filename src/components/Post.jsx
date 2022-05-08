import { motion } from "framer-motion";

function PortItem({ post }) {
  const tags = post.tags;
  const excerptLength = post.excerpt.length;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="post-box p-5 m-1 text-white break-inside"
    >
      <img
        alt={post.company}
        className="float-left m-1"
        src={post.companyImg}
      />
      <h4 className="mb-1 h-[45px] pl-[50px] pt-[9px]">
        <a href={post.hyperlink}>{post.company}</a>
      </h4>
      <div className={excerptLength > 0 ? "shadow-lg" : ""}>
        <div className={excerptLength < 0 ? "shadow-lg" : ""}>
          <a href={post.hyperlink}>
            <img
              className="aspect-square rounded"
              alt="{post.header}"
              src={post.itemImg}
            />
          </a>
        </div>
        <div className={excerptLength > 0 ? "excerpt-box" : ""}>
          <h2 className="text-[25px] mt-[15px]">
            <a href={post.hyperlink}>{post.header}</a>
          </h2>
          <div className="mt-1">
            {tags.map((value, index) => {
              return (
                <span
                  className="mr-2 py-1 text-[1em] text-[#5A576D] after:content-[','] last:after:content-['']"
                  key={index}
                >
                  {value}
                </span>
              );
            })}
          </div>
          <p className="mt-3">{post.excerpt}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default PortItem;
