import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Life is what happens when you're busy making other plans",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true, tagtittle: "Upload now", tagcolor: "green" },
    },
    {
      desc: "The greatest glory in living lies not in never falling, but in rising every time we fall",
      filesize: ".10mb",
      close: false,
      tag: { isopen: true, tagtittle: "Download now", tagcolor: "blue" },
    },
    {
      desc: "Life is a beautiful journey that is meant to be embraced to the fullest every day",
      filesize: ".5mb",
      close: false,
      tag: { isopen: false, tagtittle: "Sending now", tagcolor: "green" },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} references={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
