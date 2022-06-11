function RobiGif({ src, style }) {
  return (
    <div
      className="RobiGifFlex"
      style={{ backgroundImage: `url(${src})`, ...style }}
    ></div>
  );
}

export default RobiGif;
