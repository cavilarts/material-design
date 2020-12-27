import { shallow } from 'enzyme';
import Input from './index';

describe('Input', () => {
  it('Should render a default input', () => {
    const input = shallow(<Input type='text' />);

    expect(input).toMatchSnapshot();
  });

  it('Should receive type property', () => {
    const input = shallow(<Input type='text' />);

    expect(input.find('input').prop('type')).toBe('text');
  });

  it('Should contain a placeholder', () => {
    const input = shallow(<Input type='text' placeholder='A placeholder value' />);

    expect(input.find('input').prop('placeholder')).toBe('A placeholder value');
  });

  it('Should handle onChange', () => {
    const onChangeCallback = jest.fn();
    const input = shallow(<Input type='text' onChange={onChangeCallback} />);

    input.find('input').simulate('change', { target: { value: 'Hello' } });
    expect(onChangeCallback).toHaveBeenCalledWith('Hello');
  });

  it('Should handle onKeyDown', () => {
    const onKeyDownCallback = jest.fn();
    const input = shallow(<Input type='text' onKeyDown={onKeyDownCallback} />);

    input.find('input').simulate('keydown', { key: 'z', keyCode: 90, which: 90 });
    expect(onKeyDownCallback).toHaveBeenCalledWith({ key: 'z', keyCode: 90, which: 90 });
  });

  it('Should contain a label', () => {
    const input = shallow(<Input type='email' label='Email' />);

    expect(input.find('label').text()).toBe('Email');
    expect(input.find('label').length).toBe(1);
  });

  it('Should contain an id prop', () => {
    const input = shallow(<Input type='text' label='Email' id='email' />);

    expect(input.find('input').prop('id')).toBe('email');
    expect(input.find('label').prop('htmlFor')).toBe('email');
  });
});
