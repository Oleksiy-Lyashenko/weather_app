import bcCloudy from './assets/Cloud-background.png';
import location from './assets/icons/location.svg';
import pin from './assets/icons/pin.svg';
import { weatherIcons } from './services/weatherIcon';

export default function BigBlock({
  clickModalWindow,
  clickOnLocation,
  weatherOfCity,
  typeOfTemperature,
}) {
  const today = weatherOfCity.list[0];
  const { main, weather } = today;
  const data = new Date(`${today.dt_txt}`).toDateString().split(' ');

  return (
    <div className="left-side__content">
      <img src={bcCloudy} alt="" className="left-side__bc" />

      <div className="left-side__top">
        <button className="left-side__rectangular-button" onClick={clickModalWindow}>
          Seach for places
        </button>
        <button className="left-side__round-button">
          <img src={location} alt="" className="left-side__location" onClick={clickOnLocation} />
        </button>
      </div>

      <img src={weatherIcons(weather[0].description)} alt="" className="left-side__central-img" />

      {typeOfTemperature === 'c' ? (
        <h2 className="left-side__temperature">
          {Math.round(main.temp)}
          <span className="left-side__temperature__icon">℃</span>
        </h2>
      ) : (
        <h2 className="left-side__temperature">
          {Math.round(main.temp * 1.8) + 32}
          <span className="left-side__temperature__icon">℉</span>
        </h2>
      )}

      <h4 className="left-side__type-of-weather">{}</h4>

      <div className="left-side__bottom">
        <span className="left-side__date">
          Today &nbsp; &middot; &nbsp; {data[0]}, {data[1]} {data[2]}
        </span>

        <p className="left-side__pin">
          <img src={pin} alt="" className="left-side__pin__img" />
          {weatherOfCity.city.name}
        </p>
      </div>
    </div>
  );
}
