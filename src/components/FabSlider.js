function FabSlider({ imgTop, imgBottom, noBottomLabel }) {
  return (
    <div className="FabSlider">
      <div className="FabSlider__elementTop">
        {imgTop ? <img className="FabSlider__image" src={imgTop} /> : "+"}
      </div>
      <div className="FabSlider__bar"></div>
      <div className="FabSlider__elementBottom">
        {imgBottom ? (
          <img className="FabSlider__image" src={imgBottom} />
        ) : noBottomLabel ? (
          ""
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}

export default FabSlider;
