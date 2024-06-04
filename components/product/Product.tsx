import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Cheese from "../../public/image/Cheese.jpg";
import oil from "../../public/image/oil.jpg";
import woraq from "../../public/image/woraq.jpg";
import Image from "next/image";
export default function App() {
  return (
    <div className=" pb-20 pt-20  bg-red flex flex-col">
      <div className="py-10 w-full text-center text-5xl text-white font-bold">
        Product
      </div>
      <div>
        <div className="flex flex-row  w-full justify-center pt-20 flex-wrap gap-y-2 gap-x-2 ">
          <Image src={Cheese} width={300} height={300} alt="no image" />
          <Image src={oil} width={300} height={300} alt="no image" />
          <Image src={woraq} width={300} height={300} alt="no image" />
          <Image src={Cheese} width={300} height={300} alt="no image" />
          <Image src={oil} width={300} height={300} alt="no image" />
          <Image src={woraq} width={300} height={300} alt="no image" />
          <Image src={Cheese} width={300} height={300} alt="no image" />
          <Image src={oil} width={300} height={300} alt="no image" />
          <Image src={woraq} width={300} height={300} alt="no image" />
          <Image src={Cheese} width={300} height={300} alt="no image" />
          <Image src={oil} width={300} height={300} alt="no image" />
          <Image src={woraq} width={300} height={300} alt="no image" />
        </div>
      </div>
    </div>
  );
}
