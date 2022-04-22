import React from "react";
import classNames from "classnames";

class Fabutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  toggleActiveState() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div
        onClick={() => {
          this.toggleActiveState();
          this.props.onClick();
        }}
        className={classNames("Fabutton", this.props.className, {
          "Fabutton--active": this.state.active,
        })}
        style={this.props.style}
      >
        {this.props.children || "..."}
      </div>
    );
  }
}

export default Fabutton;
