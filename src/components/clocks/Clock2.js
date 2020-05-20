import React, { useState, useEffect } from 'react';
import { Clock as ReactClock } from 'react-clock';
import Select from '../select/Select';
import styles from './clocks.module.css';

const Clock2 = ({ hours2, cities }) => {
  const [value, setValue] = useState();

  const time = new Date();

  time.setMilliseconds(hours2 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => setValue(time), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return (
    <div className={styles.clock}>
      <ReactClock
        hourHandLength={40}
        minuteHandLength={80}
        size={200}
        value={value}
      />
      <h5>{value ? value.toLocaleString('ru', options) : '00:00:00'}</h5>
      <Select clockNumber={2} cities={cities} />
    </div>
  );
};

export default Clock2;
