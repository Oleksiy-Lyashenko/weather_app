export const weatherIcons = (weather) => {
  switch (weather) {
    case 'clear sky':
      return './images/Clear.png';
    case 'few clouds':
      return './images/LightCloud.png';
    case 'scattered clouds':
    case 'broken clouds':
      return './images/HeavyCloud.png';
    case 'shower rain':
      return './images/LightRain.png';
    case 'rain':
      return './images/Shower.png';
    case 'thunderstorm':
      return './images/Thunderstorm.png';
    case 'snow':
      return './images/Snow.png';
    case 'mist':
      return './images/Sleet.png';
    default:
      return './images/Clear.png';;
  }
};
