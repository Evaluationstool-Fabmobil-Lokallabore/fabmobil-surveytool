import robiHeartDefaultGif from "../assets/robi-gifs/Robi_heart-min.gif";

function RobiGif({ src, style }) {
  return (
    <div className="RobiGifSpecial" style={style}>
      <img src={src || robiHeartDefaultGif} alt="" />
    </div>
  );
}

export default RobiGif;
