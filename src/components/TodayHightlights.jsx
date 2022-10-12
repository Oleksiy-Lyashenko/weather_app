import navigation from './assets/icons/navigation.svg';
export default function TodayHightlights({ weather }) {
  const { main, wind, visibility } = weather;
  
  const styleOfLine = {
    position: 'absolute',
    width: `${main.humidity}%`,
    height: '8px',
    backgroundColor: '#FFEC65',
    borderRadius: '80px',
  };

  const styleOfNavigation = {
    transform: `rotate(${wind.deg}deg)`,
  }

  return (
    <div className="right-side__bottom">
      <h2 className="right-side__bottom__title">Today’s Hightlights </h2>

      <div className="hightlight">
        <div className="hightlight__container">
          <span className="hightlight__title">Wind status</span>
          <span className="hightlight__main">
            {(wind.speed * 3.6).toFixed(1)}
            <span className="hightlight__submain">kmh</span>
          </span>
          <div className="hightlight__navigation">
            <div className="hightlight__container-img">
              <img src={navigation} alt="" style={styleOfNavigation} className="hightlight__img" />
            </div>

            <span className="hightlight__subtitle">WSW</span>
          </div>
        </div>

        <div className="hightlight__container">
          <span className="hightlight__title">Humidity</span>
          <span className="hightlight__main hightlight__main--humidity">
            {main.humidity}
            <span className="hightlight__submain">%</span>
          </span>

          <div className="hightlight__number">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>

          <div className="hightlight__line">
            <div style={styleOfLine}></div>
          </div>

          <span className="hightlight__percent">%</span>
        </div>

        <div className="hightlight__container">
          <span className="hightlight__title">Visibility</span>
          <span className="hightlight__main hightlight__main--humidity">
            {(visibility / 1000).toFixed(1)} <span className="hightlight__submain">km</span>
          </span>
        </div>

        <div className="hightlight__container">
          <span className="hightlight__title">Air Pressure</span>
          <span className="hightlight__main hightlight__main--humidity">
            {main.pressure} <span className="hightlight__submain">mb</span>
          </span>
        </div>
      </div>
    </div>
  );
}
