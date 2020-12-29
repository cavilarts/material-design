import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import RadioButton from './index';

configure({ adapter: new Adapter() });

describe('Radio Button', () => {
  it('Should render a radio button element', () => {
    const radioButton = shallow(<RadioButton options={['Radio Option']} onClick={() => {}} />);

    expect(radioButton).toMatchSnapshot();
  });

  it('should select the clicked option', () => {
    const clickCallback = jest.fn();
    const radioButton = shallow(<RadioButton options={['Radio Option', 'Another Option']} onClick={clickCallback} />);

    radioButton.find('input').at(1).simulate('click', {});
    expect(clickCallback).toHaveBeenCalledWith(1);
  });
});
