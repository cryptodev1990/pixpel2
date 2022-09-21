import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value} days`;
}

const DateSlider = ({ initialValue }) => {
  return (
    <Box>
      <Slider
        aria-label="Staking Days"
        defaultValue={30}
        getAriaLabel={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={120}
      />
    </Box>
  );
};

export default DateSlider;
