import React, { useState } from 'react';
import style from './select.module.css';

const timeZones = ['Moscow', 'Krasnodar', 'Krasnoyarsk'];

const Select = () => {
  const [state, setState] = useState('');

  const onChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={style.select}>
      <select value={state} onChange={onChange}>
        {timeZones.map((timeZone, index) => (
          <option key={index} value={timeZone}>
            {timeZone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
