import React from "react";
import Fabutton from "./Fabutton";

class SingleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: null };
  }

  toggle(answer) {
    if (answer === this.state.answer) {
      //remove
      this.setState({
        ...this.state,
        answer: null,
      });
    } else {
      //add
      this.setState({
        ...this.state,
        answer: answer,
      });
    }
  }

  isActive(answer) {
    return this.state.answer === answer;
  }

  render() {
    const { options, onSelect } = this.props;
    return (
      <>
        {options.map((option) => (
          <Fabutton
            key={option}
            isActive={this.isActive(option)}
            onClick={() => {
              this.toggle(option);
              onSelect();
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
