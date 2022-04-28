/* eslint-disable no-useless-constructor */
import React from "react";
import Fabutton from "./Fabutton";

class SingleChoice extends React.Component {
  constructor(props) {
    super(props);
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
              this.props.onSelect(option);
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
