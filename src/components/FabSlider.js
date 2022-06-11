import Slider from "@mui/material/Slider";
import React from "react";

const DEFAULT_STEP_MIN = 0;
const DEFAULT_STEP_MAX = 5;
const DEFAULT_VALUE = null;

function FabSlider(props) {
  const value = props.value === undefined ? DEFAULT_VALUE : props.value;
  return (
    <div className="FabSlider">
      <div className="FabSlider__elementTop">
        {props.imgTop ? (
          <img className="FabSlider__image" src={props.imgTop} alt="" />
        ) : (
          "+"
        )}
      </div>

      <div className="FabSlider__bar">
        <div
          className="FabSlider__bar__filler"
          style={{
            height: (value / (props.maxSteps || DEFAULT_STEP_MAX)) * 100 + "%",
          }}
        ></div>
        <Slider
          aria-label="Like"
          orientation="vertical"
          min={props.minSteps || DEFAULT_STEP_MIN}
          max={props.maxSteps || DEFAULT_STEP_MAX}
          marks={true}
          color="secondary"
          valueLabelDisplay="on"
          value={value}
          onChange={(_, newValue) => props.onChange(newValue)}
        />
      </div>
      <div className="FabSlider__elementBottom">
        {props.imgBottom ? (
          <img className="FabSlider__image" src={props.imgBottom} alt="" />
        ) : props.noBottomLabel ? (
          ""
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}

export default FabSlider;
