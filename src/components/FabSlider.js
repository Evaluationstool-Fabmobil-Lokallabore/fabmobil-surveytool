import Slider from "@mui/material/Slider";
import React from "react";

const DEFAULT_STEP_MIN = 0;
const DEFAULT_STEP_MAX = 5;

function FabSlider(props) {
  return (
    <div className="FabSlider">
      <div className="FabSlider__elementTop">
        {props.imgTop ? (
          <img className="FabSlider__image" src={props.imgTop} />
        ) : (
          "+"
        )}
      </div>

      <div className="FabSlider__bar">
        <div className="FabSlider__bar__filler"></div>
        <Slider
          aria-label="Like"
          orientation="vertical"
          min={props.minSteps || DEFAULT_STEP_MIN}
          max={props.maxSteps || DEFAULT_STEP_MAX}
          marks={true}
          color="secondary"
          valueLabelDisplay="on"
          value={props.value}
          onChange={(_, newValue) => props.onChange(newValue)}
        />
      </div>
      <div className="FabSlider__elementBottom">
        {props.imgBottom ? (
          <img className="FabSlider__image" src={props.imgBottom} />
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
