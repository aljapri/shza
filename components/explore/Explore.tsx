import Image from 'next/image'
import React from 'react'
import Cheese from "../../public/image/Cheese.jpg";
import oil from "../../public/image/oil.jpg";
import woraq from "../../public/image/woraq.jpg";
import phol from "../../public/image/phol.jpeg";

export default function Explore() {
  return (
    <div className="w-full px-20 flex  flex-col  pb-20 pt-20  bg-gradient-to-t from-fern to-laPaima ">
      <div className="py-10 w-full text-center text-5xl text-green">
        Explore
      </div>
      <div>
        <div className="flex flex-row  w-full justify-between flex-wrap gap-y-10 pt-40 ">
          <Image
            src={Cheese}
            className="h-[550px]"
            width={350}
            height={600}
            alt="no image"
          />
          <Image
            src={oil}
            className="h-[550px]"
            width={350}
            height={600}
            alt="no image"
          />
          <Image
            src={woraq}
            className="h-[550px]"
            width={350}
            height={600}
            alt="no image"
          />
          <Image
            src={phol}
            className="h-[550px]"
            width={350}
            height={600}
            alt="no image"
          />
        </div>
      </div>
    </div>
  );
}
