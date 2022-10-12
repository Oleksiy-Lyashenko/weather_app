import { useState } from 'react';
import ModalWindow from './ModalWindow';
import BigBlock from './BigBlock';
import ClipLoader from 'react-spinners/ClipLoader';

export default function LeftSide({
  fetchLocationWeather,
  fetchWeather,
  wrongInput,
  setWrongInput,
  weatherOfCity,
  typeOfTemperature,
  listOfCity,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const clickModalWindow = () => {
    setModalOpen(!modalOpen);
  };

  const clickOnLocation = () => {
    const success = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchLocationWeather(lat, lon);
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <>
      <div className="left-side">
        <div className="wrapper">
          {weatherOfCity ? (
            <BigBlock
              clickModalWindow={clickModalWindow}
              clickOnLocation={clickOnLocation}
              weatherOfCity={weatherOfCity}
              typeOfTemperature={typeOfTemperature}
            />
          ) : (
            <div className="left-side__content left-side__content--spinner">
              <ClipLoader color="#A09FB1" loading size="75px" className="quiz__loader" />
            </div>
          )}
        </div>

        <ModalWindow
          modalOpen={modalOpen}
          clickModalWindow={clickModalWindow}
          fetchWeather={fetchWeather}
          wrongInput={wrongInput}
          setWrongInput={setWrongInput}
          listOfCity={listOfCity}
        />
      </div>
    </>
  );
}
