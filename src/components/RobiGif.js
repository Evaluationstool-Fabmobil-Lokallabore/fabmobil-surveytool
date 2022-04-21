import robiHeartDefaultGif from "../assets/robi-gifs/Robi_heart-min.gif";

function RobiGif({ src, style }) {
  return (
    <div className="RobiGif" style={style}>
      <img src={src || robiHeartDefaultGif} />
    </div>
  );
}

export default RobiGif;
