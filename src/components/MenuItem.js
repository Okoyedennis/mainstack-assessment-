import { useState } from "react";

const MenuItem = (props) => {
  const { imgSrc, itemText } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center h-[28px] mt-3 cursor-pointer"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img
        src={imgSrc}
        alt={itemText}
        className="menu-item-image w-[20.33px] h-[20.33px] object-contain"
      />
      {isHovered && (
        <div className="absolute bg-black w-auto -right-[3rem] rounded-md p-2 text-white text-sm ease-in">
          {itemText}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
