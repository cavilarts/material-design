import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('Should render a button primary by default', () => {
    const button = shallow(<Button></Button>);

    expect(button).toMatchSnapshot();
  });
});
