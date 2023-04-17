import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Pictures = ({ img, active, i, id, handleClick }) => {
  return <motion.div
  variants={fadeIn("spring", i * 0.5, 0.75)}
  className={`relative ${
    active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
  } flex items-center justify-center min-w-[170px] transition-[flex] duration-[0.7s]  cursor-pointer`}
  onClick={() => handleClick(id)}
  >
    <img
        src={img}
        alt="title"
        className="absolute w-full h-[70%] object-cover rounded-[24px]"
      />

  </motion.div>;
};

export default Pictures;
