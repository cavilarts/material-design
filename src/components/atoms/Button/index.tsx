import { ReactNode, SyntheticEvent, useCallback } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface buttonProps {
  type?: 'primary' | 'secondary';
  children?: ReactNode;
  onClick?: (event: SyntheticEvent) => void;
}

const Button: React.FC<buttonProps> = ({ type, children, onClick }) => {
  const clickCallback = useCallback(
    event => {
      if (onClick) {
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <button
      onClick={clickCallback}
      className={classNames('button', {
        'button--primary': type === 'primary',
        'button--secondary': type === 'secondary',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
