import React, { useState, useEffect } from 'react';
import { Clock as ReactClock } from 'react-clock';
import Select from '../select/Select';
import styles from './clock.module.css';

const Clock = () => {
  const [value, setValue] = useState();

  const data = new Date();

  data.setMilliseconds(0);

  useEffect(() => {
    const interval = setInterval(() => setValue(data), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [data]);

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
      <Select />
    </div>
  );
};

export default Clock;
