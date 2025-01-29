import React from "react";
import PropTypes from "prop-types";

const ColorSelection = ({ colors }) => {
  return (
    <div className="w-full min-w-[660px] flex flex-col gap-5">
      <div className="w-[40%] h-[1px] bg-white/50 mt-[20px]"></div>
      <h3 className="font-bruno text-[14px] font-normal text-white m-0">
        Select Colors
      </h3>
      <div className="flex flex-row gap-[17px] items-center h-[31px]">
        {colors.map((colorOption) => (
          <div
            key={colorOption.id}
            className={`w-[31px] h-[31px] rounded-full cursor-pointer transition-transform duration-200 ${
              colorOption.selected ? "border-2 border-white" : ""
            }`}
            style={{ backgroundColor: colorOption.color }}
          ></div>
        ))}
      </div>
      <div className="w-[40%] h-[1px] bg-white/50"></div>
    </div>
  );
};

ColorSelection.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ),
};

ColorSelection.defaultProps = {
  colors: [
    { id: 1, color: "#ffc633", selected: false },
    { id: 2, color: "#38b6ff", selected: true },
    { id: 3, color: "#d58c3e", selected: false },
  ],
};

export default ColorSelection;
