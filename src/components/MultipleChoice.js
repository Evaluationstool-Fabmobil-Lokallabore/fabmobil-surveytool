import React from "react";
import Fabutton from "./Fabutton";

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
  }

  toggle(answer) {
    const index = this.state.answers.indexOf(answer);
    console.log(index);
    if (index > -1) {
      //remove
      let newArr = this.state.answers.slice();
      newArr.splice(index, 1);
      this.setState({
        ...this.state,
        answers: newArr,
      });
    } else {
      //add
      this.setState({
        ...this.state,
        answers: [...this.state.answers, answer],
      });
    }
  }

  isActive(answer) {
    return this.state.answers.indexOf(answer) > -1;
  }

  render() {
    const { options } = this.props;
    return (
      <>
        {options.map((option) => (
          <Fabutton
            key={option}
            isActive={this.isActive(option)}
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

export default MultipleChoice;
