import React, { useState, useEffect } from 'react';
import style from './select.module.css';
import { connect } from 'react-redux';
import { changeTimezone } from '../../redux/actions';

const Select = ({ cities, changeTimezone }) => {
  const [selectedCity, setSelectedCity] = useState(0);

  // useEffect(() => {
  //   //eslint-disable-next-line
  // }, [selectedCity]);

  const onChange = (e) => {
    setSelectedCity(e.target.value);
    changeTimezone(selectedCity);
  };
  console.log(selectedCity);

  return (
    <div className={style.select}>
      <select value={selectedCity} onChange={onChange}>
        {cities.map((item) => (
          <option key={item.id} value={item.timeDifference}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default connect(mapStateToProps, { changeTimezone })(Select);
