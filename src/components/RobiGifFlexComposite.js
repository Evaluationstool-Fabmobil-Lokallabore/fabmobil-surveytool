import React from "react";
import robiAuftritt from "../assets/robi-gifs/Robi_auftritt-once-min.gif";
import robiWinken from "../assets/robi-gifs/Robi_winken-min.gif";

const DURATION = 6120;

class RobiGifComposite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSecondGif: false,
    };
  }

  doStuff() {
    this.setState({ ...this.state, showSecondGif: true });
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.doStuff(), DURATION);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { style } = this.props;
    return (
      <div className="RobiGifFlexComposite" style={style}>
        <div
          className="RobiGifFlexComposite__inner"
          style={{
            backgroundImage: `url(${robiAuftritt})`,
            opacity: this.state.showSecondGif ? 0 : 1,
          }}
        ></div>
        <div
          className="RobiGifFlexComposite__inner"
          style={{
            backgroundImage: `url(${robiWinken})`,
            opacity: this.state.showSecondGif ? 1 : 0,
          }}
        ></div>
      </div>
    );
  }
}

export default RobiGifComposite;
