import React, { useState, useEffect } from 'react';
import { Clock as ReactClock } from 'react-clock';
import Select from '../select/Select';
import styles from './clock.module.css';

const Clock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.clock}>
      <ReactClock
        hourHandLength={40}
        minuteHandLength={80}
        size={200}
        value={value}
      />
      <h5>{value.toTimeString()}</h5>
      <Select />
    </div>
  );
};

export default Clock;
