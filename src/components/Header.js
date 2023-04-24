import React from "react";

const Header = () => {
  return (
    <>
      <div className="container mx-auto px-2 md:px-5 h-[68px] flex items-center">
        <h3 className="text-[14px] md:text-[20px] leading-[24px] tracking-[-1.5%] text-primary font-bold">
          Dashboard
        </h3>
      </div>
      <div className="container mx-auto px-2 md:px-5 h-[40px] md:h-[68px] flex items-center justify-between">
        <div className="">
          <h3 className="text-[14px] md:text-[24px] leading-[32px] tracking-[-1.5%] text-primary font-bold">
            Good morning, Blessing ⛅️
          </h3>
          <p className="text-grayish text-xs md:text-sm leading-[22px] md:mt-2">
            Check out your dashboard summary.
          </p>
        </div>
        <p className="text-active text-xs leading-[18px] md:text-sm md:leading-[22px] font-medium">
          View analytics
        </p>
      </div>
    </>
  );
};

export default Header;
