"use client";
import Image from "next/image";
import zahrit from "../../public/image/zahrit.jpg";
import { useEffect, useState } from "react";
export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <header
      className={`w-full h-[80px] py-2 flex items-center fixed top-0 left-0   justify-between px-24  max-sm:justify-center ${
        scrolled && "bg-white shadow-2xl text-green"
      } `}
    >
      <div>
        <h1 className={`rounded-full ${scrolled && "text-green"} max-sm:hidden text-3xl`}>
          شذى الشام
        </h1>
      </div>
      <div>
        <ul className="flex-row-reverse flex space-x-reverse space-x-4">
          <li>
            <a href="#home" className="smoothScroll">
              الرئيسية
            </a>
          </li>
          <li>
            <a href="#about" className="smoothScroll">
              من نحن
            </a>
          </li>
          <li>
            <a href="#blog" className="smoothScroll">
              منتاجاتنا
            </a>
          </li>
          <li>
            <a href="#work" className="smoothScroll">
              أتصل بنا
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
