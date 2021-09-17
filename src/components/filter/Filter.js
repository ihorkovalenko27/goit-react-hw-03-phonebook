import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter contacts by name{' '}
      <input className={s.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
