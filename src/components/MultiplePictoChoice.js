import React from "react";
import FABMOBIL_TECHNOLOGIES from "./../constants/fabmobil_technologies";
import ClickablePicto from "./ClickablePicto";

const ANSWER_OPTIONS = FABMOBIL_TECHNOLOGIES;

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

  render() {
    const data = this.props.data || [];
    return (
      <>
        <div style={{ position: "relative" }}>
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[0].title, data)}
            src={ANSWER_OPTIONS[0].picto}
            title={ANSWER_OPTIONS[0].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[0].title, data);
            }}
          />
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[1].title, data)}
            src={ANSWER_OPTIONS[1].picto}
            title={ANSWER_OPTIONS[1].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[1].title, data);
            }}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[2].title, data)}
            src={ANSWER_OPTIONS[2].picto}
            title={ANSWER_OPTIONS[2].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[2].title, data);
            }}
            style={{ position: "absolute", bottom: "-19%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[3].title, data)}
            src={ANSWER_OPTIONS[3].picto}
            title={ANSWER_OPTIONS[3].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[3].title, data);
            }}
            style={{ marginTop: "100%" }}
          />
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[4].title, data)}
            src={ANSWER_OPTIONS[4].picto}
            title={ANSWER_OPTIONS[4].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[4].title, data);
            }}
            style={{ position: "absolute", bottom: "15%", left: 0 }}
          />
        </div>
        <div style={{ position: "relative" }}>
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[5].title, data)}
            src={ANSWER_OPTIONS[5].picto}
            title={ANSWER_OPTIONS[5].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[5].title, data);
            }}
            style={{ marginTop: 20 }}
          />
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[6].title, data)}
            src={ANSWER_OPTIONS[6].picto}
            title={ANSWER_OPTIONS[6].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[6].title, data);
            }}
            style={{ position: "absolute", top: "50%", left: 0 }}
          />
          <ClickablePicto
            isActive={this.isActive(ANSWER_OPTIONS[7].title, data)}
            src={ANSWER_OPTIONS[7].picto}
            title={ANSWER_OPTIONS[7].title}
            onClick={() => {
              this.toggle(ANSWER_OPTIONS[7].title, data);
            }}
            style={{ position: "absolute", bottom: 0, left: 0 }}
          />
        </div>
      </>
    );
  }
}

export default MultiplePictoChoice;
