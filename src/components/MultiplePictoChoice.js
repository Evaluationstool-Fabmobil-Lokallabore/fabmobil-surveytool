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

  getStyle(index = 0) {
    if (!this.props.styles || !this.props.styles.length) {
      return {};
    }
    return this.props.styles[index];
  }

  render() {
    const data = this.props.data || [];
    const options = this.props.options || [];
    const column1 = options.slice(0, 3);
    const column2 = options.slice(3, 6);
    const column3 = options.slice(6, options.length + 1);
    return (
      <>
        <div style={{ position: "relative" }}>
          {column1.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(i)}
            />
          ))}
        </div>
        <div style={{ position: "relative" }}>
          {column2.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(3 + i)}
            />
          ))}
        </div>
        <div style={{ position: "relative" }}>
          {column3.map((option, i) => (
            <ClickablePicto
              key={option.title}
              isActive={this.isActive(option.title, data)}
              src={option.picto}
              title={option.title}
              onClick={() => {
                this.toggle(option.title, data);
              }}
              style={this.getStyle(6 + i)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MultiplePictoChoice;
