import React from "react";
import Fabutton from "./Fabutton";

class SingleChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle(answer) {
    this.props.onSelect(answer);
  }

  isActive(option, answer) {
    return option === answer;
  }

  render() {
    const { options, answer } = this.props;
    return (
      <>
        {options.map((option) => (
          <Fabutton
            key={option}
            isActive={this.isActive(option, answer)}
            onClick={() => {
              this.toggle(option);
            }}
          >
            {option}
          </Fabutton>
        ))}
      </>
    );
  }
}

export default SingleChoice;
