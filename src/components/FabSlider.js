import Slider from "@mui/material/Slider";
import React from "react";

const DEFAULT_STEP_MIN = 0;
const DEFAULT_STEP_MAX = 5;

class FabSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleSliderChange(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="FabSlider">
        <div className="FabSlider__elementTop">
          {this.props.imgTop ? (
            <img className="FabSlider__image" src={this.props.imgTop} />
          ) : (
            "+"
          )}
        </div>

        <div className="FabSlider__bar">
          <div className="FabSlider__bar__filler"></div>
          <Slider
            aria-label="Like"
            orientation="vertical"
            min={this.props.minSteps || DEFAULT_STEP_MIN}
            max={this.props.maxSteps || DEFAULT_STEP_MAX}
            marks={true}
            color="secondary"
            valueLabelDisplay="on"
            value={this.state.value}
            onChange={(_, newValue) => this.handleSliderChange(newValue)}
          />
        </div>
        <div className="FabSlider__elementBottom">
          {this.props.imgBottom ? (
            <img className="FabSlider__image" src={this.props.imgBottom} />
          ) : this.props.noBottomLabel ? (
            ""
          ) : (
            "-"
          )}
        </div>
      </div>
    );
  }
}

export default FabSlider;
