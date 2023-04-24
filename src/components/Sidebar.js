import React, { useState } from "react";
import img1 from "../images/mainstack-logo.png";
import img2 from "../images/blessing_daniels.png";
import { RiDashboardFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { other1, other2, other3 } from "./Data";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [mobileText, setMobileText] = useState(false);

  const changeScreenWidth = () => {
    window.innerWidth <= 586 ? setMobileText(true) : setMobileText(false);
    if (toggleMenu) {
      setToggleMenu(!toggleMenu);
    }
  };

  window.addEventListener("resize", changeScreenWidth);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      {toggleMenu ? (
        <div className="container mx-auto w-full flex-[2] flex items-center flex-col border-r-2 border-[#EFF1F6] h-screen transform transition-all duration-500">
          <div className="flex items-center justify-between w-full pl-10 pr-5 h-[68px]">
            <img src={img1} className="ml-[-7px]" alt="logo" />
            <button
              disabled={mobileText}
              className={
                toggleMenu
                  ? "block hamburger  focus:outline-none open mt-2"
                  : "block hamburger  focus:outline-none mt-2"
              }
              type="button"
              onClick={handleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="mt-8 w-full">
            <div className="flex items-center gap-5 px-10 border-l-2 border-active rounded-br-sm rounded-tr-sm cursor-pointer h-[28px]">
              <RiDashboardFill className="text-active w-[18.33px] h-[18.33px]" />
              <h6 className="text-active text-base leading-[24px] font-medium">
                Dashboard
              </h6>
            </div>
            {other1.map(({ icon, text }, index) => (
              <div
                className="flex items-center gap-5 px-10 h-[28px] mt-3 cursor-pointer"
                key={index}
              >
                <img
                  src={icon}
                  alt={text}
                  className=" w-[18.33px] h-[18.33px] object-contain"
                />
                <h6 className="text-base text-grayish leading-[24px] font-medium">
                  {text}
                </h6>
              </div>
            ))}
            <div className="mt-6 ">
              <h6 className="text-xs leading-[16px] text-grayish px-10">
                OTHERS 1
              </h6>
              {other2.map(({ icon, text }, index) => (
                <div
                  className="flex items-center gap-5 px-10 h-[28px] mt-3 cursor-pointer"
                  key={index}
                >
                  <img
                    src={icon}
                    alt={text}
                    className=" w-[15.33px] h-[15.33px] object-contain"
                  />
                  <h6 className="text-base text-grayish leading-[24px] font-medium">
                    {text}
                  </h6>
                </div>
              ))}
            </div>
            <div className="mt-6 ">
              <h6 className="text-xs leading-[16px] text-grayish px-10">
                OTHER 2
              </h6>
              {other3.map(({ icon, text }, index) => (
                <div
                  className="flex items-center gap-5 px-10 h-[28px] mt-3 cursor-pointer"
                  key={index}
                >
                  <img
                    src={icon}
                    alt={text}
                    className=" w-[15.33px] h-[15.33px] object-contain"
                  />
                  <h6 className="text-base text-grayish leading-[24px] font-medium">
                    {text}
                  </h6>
                </div>
              ))}
            </div>
            <div className="fixed bottom-0 flex items-center justify-between w-full pl-10 pr-5 mb-5">
              <div className="flex items-center gap-2">
                <img
                  src={img2}
                  alt="Blessing Daniels"
                  className="h-[32px] w-[32px]"
                />
                <h6 className="text-[15px] leading-[16px] text-grayish">
                  Blessing Daniels
                </h6>
              </div>
              <BsThreeDots className="cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto w-full flex-[.3] border-r-2 border-[#EFF1F6] h-screen transform transition-all duration-500">
          <div className="flex items-center justify-between w-full px-5 h-[68px]">
            <button
              disabled={mobileText}
              className={
                toggleMenu
                  ? "block hamburger  focus:outline-none open mt-2"
                  : "block hamburger  focus:outline-none mt-2"
              }
              type="button"
              onClick={handleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="mt-8 ">
            <div
              className="flex items-center justify-center border-l-2 border-active rounded-br-sm rounded-tr-sm cursor-pointer h-[28px] relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <RiDashboardFill className="text-active w-[20.33px] h-[20.33px]" />
              {isHovered && (
                <div className="absolute bg-black w-auto -right-[5.5rem] rounded-md p-2 text-white text-sm ease-in">
                  Dashboard
                </div>
              )}
            </div>
            {other1.map(({ icon, text }, index) => (
              <MenuItem imgSrc={icon} itemText={text} />
            ))}
            <div className="mt-10">
              {other2.map(({ icon, text }, index) => (
                <MenuItem imgSrc={icon} itemText={text} />
              ))}
            </div>
            <div className="mt-10">
              {other3.map(({ icon, text }, index) => (
                <MenuItem imgSrc={icon} itemText={text} />
              ))}
            </div>

            <div className="fixed bottom-0 w-full  mb-5">
              <div
                className="flex items-center justify-center w-full cursor-pointer relative"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <img
                  src={img2}
                  alt="Blessing Daniels"
                  className="h-[32px] w-[32px]"
                />
                {isHovered2 && (
                  <div className="absolute bg-black w-auto -right-[7.5rem] rounded-md p-2 text-white text-sm ease-in">
                    Blessing Daniels
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
