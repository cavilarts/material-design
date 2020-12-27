import { shallow, configure } from 'enzyme';
import Button from './index';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('Should render a button primary by default', () => {
    const button = shallow(<Button></Button>);

    expect(button).toMatchSnapshot();
  });

  it('Should render children', () => {
    const button = shallow(<Button>I'm a button</Button>);

    expect(button.contains(`I'm a button`)).toEqual(true);
  });

  it('Should handle onClick', () => {
    const clickButton = jest.fn();
    const button = shallow(<Button onClick={clickButton}></Button>);

    button.simulate('click', {});
    expect(clickButton).toHaveBeenCalled();
  });

  it('Should do nothing if onCLick callback is not provided', () => {
    const button = shallow(<Button></Button>);

    button.simulate('click', {});
  });
});
