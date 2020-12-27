import { shallow, configure } from 'enzyme';
import Icon from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Icon', () => {
  it('should render an Icon component', () => {
    const icon = shallow(<Icon name='home' />);

    expect(icon).toMatchSnapshot();
  });

  it('should receive a name property', () => {
    const icon = shallow(<Icon name='home' />);

    expect(icon.prop('className')).toBe('icon-home');
  });

  it('should receive an ariaHidden property', () => {
    const icon = shallow(<Icon name='amazon' ariaHidden />);

    expect(icon.prop('aria-hidden')).toBe(true);
  });

  it('should receive an ariaLabel property', () => {
    const icon = shallow(<Icon name='amazon' ariaHidden={false} ariaLabel='amazon-icon' />);

    expect(icon.prop('aria-label')).toBe('amazon-icon');
  });
});
