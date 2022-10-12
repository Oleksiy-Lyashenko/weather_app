import classNames from 'classnames';
import close from './assets/icons/close.svg';
import search from './assets/icons/search.svg';
import chevron from './assets/icons/chevron.svg';
import { useState } from 'react';


export default function ModalWindow({
  modalOpen,
  clickModalWindow,
  fetchWeather,
  wrongInput,
  setWrongInput,
  listOfCity,
}) {
  const [input, setInput] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    fetchWeather(input);
  };

  return (
    <div className={classNames('modal-window', { 'modal-window--open': modalOpen })}>
      <div className="wrapper">
        <div className="modal-window__content">
          <img src={close} alt="" className="modal-window__close" onClick={clickModalWindow} />

          <form
            onSubmit={onSubmit}
            className={classNames('modal-window__form', {
              'modal-window__form--wrong': wrongInput,
            })}>
            <img src={search} alt="" className="modal-window__search" />
            <input
              type="text"
              className={classNames('modal-window__input', {
                'modal-window__input--wrong': wrongInput,
              })}
              placeholder="search location"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onClick={() => setWrongInput(false)}
            />
            <button type="submit" className="modal-window__button">
              Search
            </button>
          </form>

          {listOfCity.length > 0 &&
            listOfCity.map((city, i) => (
              <div className="modal-window__city" key={`${city}_${i}`}>
                {city}
                <img src={chevron} alt="" className="modal-window__chevron" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
