import React, { useState, useEffect } from 'react';
import style from './select.module.css';
import { connect } from 'react-redux';
import { changeTimezone } from '../../redux/actions';
import PropTypes from 'prop-types';

const cities = [
  {
    id: 1,
    name: 'Москва',
    hourDifference: 0,
  },
  {
    id: 2,
    name: 'Владивосток',
    hourDifference: 7,
  },
  {
    id: 3,
    name: 'Калининград',
    hourDifference: -1,
  },
  {
    id: 4,
    name: 'Красноярск',
    hourDifference: 4,
  },
];

const Select = ({ changeTimezone, clockNumber }) => {
  const [selectedCity, setSelectedCity] = useState(0);

  useEffect(() => {
    changeTimezone(Number(selectedCity), clockNumber);

    //eslint-disable-next-line
  }, [selectedCity]);

  const onChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={style.select}>
      <select value={selectedCity} onChange={onChange}>
        {cities.map((item) => (
          <option key={item.id} value={item.hourDifference}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  clockNumber: PropTypes.number.isRequired,
  changeTimezone: PropTypes.func.isRequired,
};

export default connect(null, { changeTimezone })(Select);
