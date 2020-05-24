import React from 'react';
import { connect } from 'react-redux';
import Clock from './Clock';
import PropTypes from 'prop-types';

const Clocks = ({ hours1, hours2 }) => {
  return (
    <>
      <Clock clockNumber={1} hours={hours1} />
      <Clock clockNumber={2} hours={hours2} />
    </>
  );
};

Clocks.propTypes = {
  hours1: PropTypes.number.isRequired,
  hours2: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    hours1: state.hours1,
    hours2: state.hours2,
  };
};

export default connect(mapStateToProps)(Clocks);
