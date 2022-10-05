import cloudy from './assets/Cloud-background.png';
import location from './assets/icons/location.svg';
import shower from './assets/Shower.png';

function App() {
  return (
    <div className="page">
      <div className="left-side">
        <div className="wrapper">
          <div className="left-side__content">
            <img src={cloudy} alt="" className="left-side__bc" />

            <div className="left-side__top">
              <button className="left-side__rectangular-button">Seach for places</button>
              <button className="left-side__round-button">
                <img src={location} alt="" className="left-side__location" />
              </button>
            </div>

            <img src={shower} alt="" className="left-side__central-img" />

            <h2 className="left-side__temperature">
              15
              <span className="left-side__temperature__icon">℃</span>
            </h2>

            <h4>Shower</h4>

            <div className="left-side__bottom">
              <p>sadfsaf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">ffff</div>
    </div>
  );
}

export default App;
