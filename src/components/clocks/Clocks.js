import React from 'react';
import { connect } from 'react-redux';
import Clock1 from './Clock1';
import Clock2 from './Clock2';
import PropTypes from 'prop-types';

const Clocks = ({ hours1, hours2, cities }) => {
  return (
    <>
      <Clock1 cities={cities} hours1={hours1} />
      <Clock2 cities={cities} hours2={hours2} />
    </>
  );
};

Clocks.propTypes = {
  hours1: PropTypes.number.isRequired,
  hours2: PropTypes.number.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    hours1: state.hours1,
    hours2: state.hours2,
    cities: state.cities,
  };
};

export default connect(mapStateToProps)(Clocks);
