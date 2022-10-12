// import shower from './assets/Shower.png';
import { useEffect, useState } from 'react';
import WeatherBox from './WeatherBox';
import TodayHightlights from './TodayHightlights';
import ClipLoader from 'react-spinners/ClipLoader';
import classNames from 'classnames';


export default function RightSide({ weatherOfCity, setTypeOfTemperature, typeOfTemperature }) {
  const [dayWeather, setDayWeather] = useState([]);
  const [nightWeather, setNightWeather] = useState([]);

  useEffect(() => {
    if (weatherOfCity) {
      const dayArr = weatherOfCity.filter(
        (day) =>
          day.dt_txt.includes('12:00:00') &&
          new Date(day.dt_txt).toDateString() !== new Date().toDateString(),
      );

      setDayWeather([...dayArr]);

      const nightArr = weatherOfCity.filter(
        (day) =>
          day.dt_txt.includes('21:00:00') &&
          new Date(day.dt_txt).toDateString() !== new Date().toDateString(),
      );

      setNightWeather([...nightArr]);
    }
  }, [weatherOfCity]);

  return (
    <div className="right-side">
      <div className="wrapper wrapper--right-side">
        {weatherOfCity ? (
          <div className="right-side__content">
            <div className="right-side__top">
              <button
                className={classNames('right-side__button', {
                  'right-side__button--active': typeOfTemperature === 'c',
                })}
                onClick={() => setTypeOfTemperature('c')}>
                ℃
              </button>
              <button
                className={classNames('right-side__button', {
                  'right-side__button--active': typeOfTemperature === 'f',
                })}
                onClick={() => setTypeOfTemperature('f')}>
                ℉
              </button>
            </div>

            <div className="right-side__middle">
              {dayWeather.length > 0 &&
                dayWeather.map((day, i) => (
                  <WeatherBox
                    key={day.dt}
                    day={day}
                    night={nightWeather[i]}
                    typeOfTemperature={typeOfTemperature}
                  />
                ))}
            </div>

            {weatherOfCity && <TodayHightlights weather={weatherOfCity[0]} />}
          </div>
        ) : (
          <div className="left-side__content left-side__content--spinner">
            <ClipLoader color="#A09FB1" loading size="75px" className="quiz__loader" />
          </div>
        )}
      </div>
    </div>
  );
}
