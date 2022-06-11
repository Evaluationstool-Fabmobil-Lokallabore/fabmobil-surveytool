import robiHeartDefaultGif from "../assets/robi-gifs/Robi_heart-min.gif";

function RobiGif({ src, style }) {
  return (
    <div
      className="RobiGifFlex"
      style={{
        backgroundImage: `url(${src || robiHeartDefaultGif})`,
        ...style,
      }}
    ></div>
  );
}

export default RobiGif;
