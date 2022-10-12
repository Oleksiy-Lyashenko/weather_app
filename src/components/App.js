import { useEffect, useState } from 'react';
import axios from 'axios';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function App() {
  const [weatherOfCity, setWeatherOfCity] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [typeOfTemperature, setTypeOfTemperature] = useState('c');
  const [listOfCity, setListOfCity] = useState([]);

  useEffect(() => {
    const success = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetchLocationWeather(lat, lon);
    };

    const error = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const fetchWeather = async (city) => {
    setWeatherOfCity(false);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=48&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
      );
      const nameOfCity = city[0].toUpperCase() + city.slice(1).toLowerCase();
      if (listOfCity.includes(nameOfCity)) {
        return setWrongInput(true);
      }

      if (listOfCity.length > 2) {
        const newArr = [...listOfCity];
        newArr.unshift(nameOfCity);
        const arr = newArr.slice(0, 3)
        setListOfCity([...arr]);
      } else {
        setListOfCity([...listOfCity, nameOfCity]);
      }
      setWeatherOfCity({ ...data });
    } catch (error) {
      setWrongInput(true);
    }
  };

  const fetchLocationWeather = async (lat, lon) => {
    setWeatherOfCity(false);

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
      );
      setWeatherOfCity({ ...data });
    } catch (error) {
      setWrongInput(true);
    }
  };

  return (
    <div className="page">
      <LeftSide
        fetchLocationWeather={fetchLocationWeather}
        fetchWeather={fetchWeather}
        wrongInput={wrongInput}
        setWrongInput={setWrongInput}
        weatherOfCity={weatherOfCity}
        typeOfTemperature={typeOfTemperature}
        listOfCity={listOfCity}
      />

      <RightSide
        weatherOfCity={weatherOfCity.list}
        setTypeOfTemperature={setTypeOfTemperature}
        typeOfTemperature={typeOfTemperature}
      />
    </div>
  );
}

export default App;
