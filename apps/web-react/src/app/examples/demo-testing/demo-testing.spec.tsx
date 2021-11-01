import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import DemoTesting from './demo-testing';
import DemoCounter from './demo-counter/demo-counter';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

(global.fetch as any) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(3),
  })
);

describe('DemoTesting', () => {
  beforeEach(() => {
    (fetch as any).mockClear(); // For tests which use HTTP module
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DemoTesting />);
    expect(baseElement).toBeTruthy();
  });

  // Add counter
  it('should add counter', () => {
    const component = shallow((<DemoTesting />));

    // TODO Don't use setTimeouts
    setTimeout(() => {
      expect(component.find('DemoCounter').length).toEqual(1);
      component.find('.add-counter').simulate('click');

      setTimeout(() => {
        expect(component.find('DemoCounter').length).toEqual(2);
      })
    })
  });
});
