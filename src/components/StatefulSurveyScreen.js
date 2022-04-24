import React from "react";
import FabTextInput from "./FabTextInput";
import WeiterButton from "./WeiterButton";

class StatefulSurveyScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  onChange(data) {
    this.setState({ ...this.state, data });
  }

  render() {
    return (
      <>
        <div>
          <p>Und wie lautet deine Postleitzahl?</p>
        </div>
        <div className="flex-vertical-center">
          <FabTextInput
            minlength="5"
            maxlength="5"
            pattern={/[0-9]{5}/}
            onChange={(event) => this.onChange(event.target.value)}
          />
        </div>
        <WeiterButton navigateTo="/losgehts/geschlecht" />
      </>
    );
  }
}

export default StatefulSurveyScreen;
