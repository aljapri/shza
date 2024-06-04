"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { headerMenu } from "../../constants/index";
import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
    <div
      className={`gpt3__navbar fixed w-full ${
        scrolled && "bg-white shadow-2xl text-green"
      }`}
    >
      <div className={`gpt3__navbar-links w-full justify-between `}>
        <div className="gpt3__navbar-links_logo">
          <h1>شذى الشام</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          {headerMenu.map((el) => {
            return (
              <>
                <p>
                  <Link
                    href="#home"
                    className={`${scrolled && "text-green"} menu-items`}
                  >
                    {el.name}
                  </Link>
                </p>
              </>
            );
          })}
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#005825"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#005825"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center bg-white">
            <div className="gpt3__navbar-menu_container-links">
              {headerMenu.map((el) => {
                return (
                  <>
                    <p>
                      <Link href="#home" className={"text-green menu-items"}>
                        {el.name}
                      </Link>
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
