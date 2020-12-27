import React, { SyntheticEvent, useCallback, useState } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface inputProps {
  type:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  label?: string;
  placeholder?: string;
  id?: string;
  onChange?: (event: SyntheticEvent) => void;
  onKeyDown?: (event: SyntheticEvent) => void;
}

const Input: React.FC<inputProps> = ({ type, label, placeholder, id, onChange, onKeyDown }) => {
  const [inputFocus, setInputFocus] = useState(false);

  const onChangeCallback = useCallback(
    event => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange],
  );
  const onKeyDownCallback = useCallback(
    event => {
      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    [onKeyDown],
  );

  return (
    <div className='input__wrapper'>
      <span className='input__labelWrapper'>
        {label ? (
          <label htmlFor={id} className={classNames('input__label', { 'input__label--active': inputFocus })}>
            {label}
          </label>
        ) : null}
      </span>
      <input
        className={classNames('input', { 'input--active': inputFocus })}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChangeCallback}
        onKeyDown={onKeyDownCallback}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </div>
  );
};

export default Input;
