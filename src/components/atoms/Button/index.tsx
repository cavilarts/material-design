import classNames from 'classnames';

import './index.scss';

export interface buttonProps {
  type?: 'primary' | 'secondary';
}

const Button: React.FC<buttonProps> = ({ type }) => {
  return (
    <button
      className={classNames('button', {
        'button--primary': type === 'primary',
        'button--secondary': type === 'secondary',
      })}
    ></button>
  );
};

export default Button;
