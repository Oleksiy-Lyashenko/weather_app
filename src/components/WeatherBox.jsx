import { weatherIcons } from './services/weatherIcon';

export default function WeatherBox({ day, night, typeOfTemperature }) {
  const { main, weather } = day;

  return (
    <div className="weather-box">
      <span>Tomorrow</span>

      <img src={weatherIcons(weather[0].description)} alt="" className="weather-box__img" />

      {typeOfTemperature === 'c' ? (
        <div className="weather-box__temperature">
          <span>{Math.round(main.temp)}°C</span>
          <span className="weather-box__night">
            {night ? `${Math.round(night.main.temp)}` : `${Math.round(main.temp - 7)}`}
            °C
          </span>
        </div>
      ) : (
        <div className="weather-box__temperature">
          <span>{Math.round(main.temp * 1.8 + 32)}℉</span>
          <span className="weather-box__night">
            {night
              ? `${Math.round(night.main.temp * 1.8 + 32)}`
              : `${Math.round(main.temp * 1.8 + 20)}`}
            ℉
          </span>
        </div>
      )}
    </div>
  );
}
