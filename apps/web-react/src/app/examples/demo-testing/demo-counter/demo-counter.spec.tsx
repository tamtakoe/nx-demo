import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DemoCounter from './demo-counter';
import fetch from 'cross-fetch';

configure({ adapter: new Adapter() });

(global.fetch as any) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(3),
  })
);

describe('DemoCounter', () => {
  beforeEach(() => {
    // (fetch as any).mockClear(); // For tests which use HTTP module
    jest.spyOn(global.Math, 'random').mockReturnValue(0.42); // For tests which use Math.random
  });

  // Base functionality
  it('should render successfully', () => {
    const { baseElement } = render(<DemoCounter />);
    expect(baseElement).toBeTruthy();
  });

  it('should increment', () => {
    const component = shallow((<DemoCounter />));

    expect(component.find('h3').text()).toBe('0');

    component.find('.increment').simulate('click');
    component.find('h3').text()

    expect(component.find('h3').text()).toBe('1');
  });

  it('should decrement', () => {
    const component = shallow((<DemoCounter />));

    expect(component.find('h3').text()).toBe('0');

    component.find('.decrement').simulate('click');
    component.find('h3').text()

    expect(component.find('h3').text()).toBe('-1');
  });

  // Randomize
  it('should randomize', () => {
    const component = shallow((<DemoCounter />));

    expect(component.find('h3').text()).toBe('0');

    component.find('.randomize').simulate('click');
    component.find('h3').text()

    expect(component.find('h3').text()).toBe('42');
  });

  // Mock http
  it('should set default value from server', () => {
    const component = shallow((<DemoCounter />));

    // Waiting for http-mock
    setTimeout(() => {
      expect(component.find('h3').text()).toBe('3');
    })
  });
});
