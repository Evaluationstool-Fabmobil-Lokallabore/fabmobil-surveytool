/* eslint-disable no-useless-constructor */
import React from "react";
import ClickablePicto from "./ClickablePicto";

class MultiplePictoChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle(answer, data) {
    const index = data.indexOf(answer);
    if (index > -1) {
      //remove
      data.splice(index, 1);
      this.props.onChange(data);
    } else {
      //add
      this.props.onChange([...data, answer]);
    }
  }

  isActive(answer, data) {
    if (!data) {
      return false;
    }
    return data.indexOf(answer) > -1;
  }

  getStyle(column = 0, index = 0) {
    if (!this.props.styles || !this.props.styles.length) {
      return {};
    }
    return this.props.styles[column][index];
  }

  render() {
    const data = this.props.data || [];
    const options = this.props.options || [];
    const column1 = options[0];
    const column2 = options[1];
    const column3 = options[2];
    return (
      <div className="MultiplePictoChoiceTool">
        <div className="MultiplePictoChoiceTool__Column">
          {column1.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              srcActive={option.pictoActive || option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(0, i)}
            />
          ))}
        </div>
        <div className="MultiplePictoChoiceTool__Column">
          {column2.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              srcActive={option.pictoActive || option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(1, i)}
            />
          ))}
        </div>
        <div className="MultiplePictoChoiceTool__Column">
          {column3.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              srcActive={option.pictoActive || option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(2, i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MultiplePictoChoice;
