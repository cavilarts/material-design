import classNames from 'classnames';

import './index.scss';
import { iconProps } from './interface';

const Icon: React.FC<iconProps> = ({ name, ariaHidden, ariaLabel }) => {
  return <span className={classNames(`icon-${name}`)} aria-hidden={ariaHidden} aria-label={ariaLabel}></span>;
};

export default Icon;
