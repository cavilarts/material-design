import { useCallback, useState } from 'react';
import classNames from 'classnames';

import './index.scss';
export interface radioButtonProps {
  options: string[];
  onClick: (index: number) => void;
}

const RadioButton: React.FC<radioButtonProps> = ({ options, onClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const clickCallback = useCallback(
    index => {
      setSelectedIndex(index);
      onClick(index);
    },
    [onClick],
  );

  return (
    <div className='radio__listWrapper'>
      {options.map((x, index) => (
        <label htmlFor={`radio-${index}`} key={index} className='radio'>
          <span className='radio__wrapper'>
            <span
              className={classNames('radio__outerCircle', { 'radio__outerCircle--selected': selectedIndex === index })}
            ></span>
            <span
              className={classNames('radio__innerCircle', { 'radio__innerCircle--selected': selectedIndex === index })}
            ></span>
            <input
              className='radio__input'
              type='radio'
              id={`radio-${index}`}
              name={x}
              value={x}
              onChange={() => {
                clickCallback(index);
              }}
              checked={selectedIndex === index}
            />
          </span>
          <span className='radio__labelContent'>{x}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
