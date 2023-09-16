import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href={"/"}>
          <img src="/logo.svg" alt="" className="w-[40px] md:w-[60px]" />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}></Menu>

        {mobileMenu && <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}></MenuMobile>}

        {/* ----------Icons start-------------------- */}
        <div className="flex items-center gap-2">
          <div className="h-9 md:h-14 w-9 md:w-14 rounded-full flex justify-center items-center hover:bg-black/[0.5] relative">
            <IoMdHeartEmpty size={18} />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600  absolute top-1 left-5 md:left-7 text-white text-[12px] md:text-[14px] flex justify-center items-center px-[2px] py-[5px]">
              5
            </div>
          </div>

          <div className="h-9 md:h-14 w-9 md:w-14 rounded-full flex justify-center items-center hover:bg-black/[0.5] relative">
            <BsCart />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600  absolute top-1 left-5 md:left-7 text-white text-[12px] md:text-[14px] flex justify-center items-center px-[2px] py-[5px]">
              5
            </div>
          </div>

          {/* Mobile Menu start */}
        
          <div className="h-9 md:h-14 w-9 md:w-14 rounded-full md:hidden flex justify-center items-center hover:bg-black/[0.5] relative -mr-2">
          {mobileMenu ? (
            <VscChromeClose
              className="text-[14px] cursor-pointer"
              onClick={() => {
                setMobileMenu(false);
                
              }}
              
            />
          ) : (
            <BiMenuAltRight
              className=" text-[14px] cursor-pointer"
              onClick={() => {
                setMobileMenu(true);
               
              }}
            />
          )}
        </div>
        </div>

        {/* Icons end */}
      </Wrapper>
    </header>
  );
};

export default Header;
