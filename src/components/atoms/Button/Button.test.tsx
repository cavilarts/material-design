import { shallow } from 'enzyme';
import Button from './index';

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
});
