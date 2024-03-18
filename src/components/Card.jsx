import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { TiDownloadOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ data, references }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={references}
        whileHover={{ scale: 1.2 }}
        dragElastic={0.2}
        transition={{ ease: "easeOut", duration: 2 }}
        className=" relative flex-shrink-0 w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer  absolute bottom-0 w-full  left-0 ">
          <div className="flex  items-center justify-between px-8 py-3 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center">
              {data.close ? (
                <MdClose color="black" />
              ) : (
                <TiDownloadOutline size=".9rem" color="black" />
              )}
            </span>
          </div>
          {data.tag.isopen && (
            <div
              className={`tag w-full p-4 flex ${
                data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
              }    items-center justify-center`}
            >
              <h3 className="text-md font-semibold">{data.tag.tagtittle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
