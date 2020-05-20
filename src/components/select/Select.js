import React, { useState, useEffect } from 'react';
import style from './select.module.css';
import { connect } from 'react-redux';
import { changeTimezone } from '../../redux/actions';
import PropTypes from 'prop-types';

const Select = ({ cities, changeTimezone, clockNumber }) => {
  const [selectedCity, setSelectedCity] = useState(0);

  useEffect(() => {
    changeTimezone(Number(selectedCity), clockNumber);

    //eslint-disable-next-line
  }, [selectedCity]);

  const onChange = (e) => {
    setSelectedCity(e.target.value);
    console.log(typeof e.target.value);
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
  cities: PropTypes.array.isRequired,
  clockNumber: PropTypes.number.isRequired,
  changeTimezone: PropTypes.func.isRequired,
};

export default connect(null, { changeTimezone })(Select);
