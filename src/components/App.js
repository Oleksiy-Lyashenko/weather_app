import cloudy from './assets/Cloud-background.png';
import location from './assets/icons/location.svg';
import shower from './assets/Shower.png';
import pin from './assets/icons/pin.svg';
import navigation from './assets/icons/navigation.svg';
import close from './assets/icons/close.svg';
import search from './assets/icons/search.svg';
import chevron from './assets/icons/chevron.svg';

import { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState('');
  const [weatherOfCity, setWeatherOfCity] = useState();

  const fetchWeather = async (city) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=48&appid=${process.env.REACT_APP_API_KEY}`,
    );

    setWeatherOfCity(data);
  };

  const clickModalWindow = () => {
    setModalOpen(!modalOpen);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchWeather(input)

    console.log(weatherOfCity);
  };

  const styleOfLine = {
    position: 'absolute',
    width: '50%',
    height: '8px',
    backgroundColor: '#FFEC65',
    borderRadius: '80px',
  };

  return (
    <div className="page">
      <div className="left-side">
        <div className="wrapper">
          <div className="left-side__content">
            <img src={cloudy} alt="" className="left-side__bc" />

            <div className="left-side__top">
              <button className="left-side__rectangular-button" onClick={clickModalWindow}>
                Seach for places
              </button>
              <button className="left-side__round-button">
                <img src={location} alt="" className="left-side__location" />
              </button>
            </div>

            <img src={shower} alt="" className="left-side__central-img" />

            <h2 className="left-side__temperature">
              15
              <span className="left-side__temperature__icon">℃</span>
            </h2>

            <h4 className="left-side__type-of-weather">Shower</h4>

            <div className="left-side__bottom">
              <span className="left-side__date">Today &nbsp; &middot; &nbsp; Fri, 5 Jun</span>

              <p className="left-side__pin">
                <img src={pin} alt="" className="left-side__pin__img" />
                Helsinki
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classNames('modal-window', { 'modal-window--open': modalOpen })}>
        <div className="wrapper">
          <div className="modal-window__content">
            <img src={close} alt="" className="modal-window__close" onClick={clickModalWindow} />

            <form onSubmit={onSubmit} className="modal-window__form">
              <img src={search} alt="" className="modal-window__search" />
              <input
                type="text"
                className="modal-window__input"
                placeholder="search location"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button type="submit" className="modal-window__button">
                Search
              </button>
            </form>

            <div className="modal-window__city">
              London
              <img src={chevron} alt="" className="modal-window__chevron" />
            </div>
            <div className="modal-window__city">
              London
              <img src={chevron} alt="" className="modal-window__chevron" />
            </div>
            <div className="modal-window__city">
              London
              <img src={chevron} alt="" className="modal-window__chevron" />
            </div>
          </div>
        </div>
      </div>

      <div className="right-side">
        <div className="wrapper wrapper--right-side">
          <div className="right-side__content">
            <div className="right-side__top">
              <button className="right-side__button right-side__button--active">℃</button>
              <button className="right-side__button">℉</button>
            </div>

            <div className="right-side__middle">
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
              <div className="weather-box">
                <span>Tomorrow</span>

                <img src={shower} alt="" className="weather-box__img" />

                <div className="weather-box__temperature">
                  <span>16°C</span>
                  <span className="weather-box__night">11°C</span>
                </div>
              </div>
            </div>

            <div className="right-side__bottom">
              <h2 className="right-side__bottom__title">Today’s Hightlights </h2>

              <div className="hightlight">
                <div className="hightlight__container">
                  <span className="hightlight__title">Wind status</span>
                  <span className="hightlight__main">
                    7<span className="hightlight__submain">mph</span>
                  </span>
                  <div className="hightlight__navigation">
                    <div className="hightlight__container-img">
                      <img src={navigation} alt="" className="hightlight__img" />
                    </div>

                    <span className="hightlight__subtitle">WSW</span>
                  </div>
                </div>

                <div className="hightlight__container">
                  <span className="hightlight__title">Humidity</span>
                  <span className="hightlight__main hightlight__main--humidity">
                    84<span className="hightlight__submain">%</span>
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
                    6,4 <span className="hightlight__submain">miles</span>
                  </span>
                </div>

                <div className="hightlight__container">
                  <span className="hightlight__title">Air Pressure</span>
                  <span className="hightlight__main hightlight__main--humidity">
                    988 <span className="hightlight__submain">mb</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
