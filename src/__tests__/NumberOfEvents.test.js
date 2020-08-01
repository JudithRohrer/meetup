import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() =>{
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test(' render NumberOfEvents component', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('render event number input', () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput')).toHaveLength(1);
  });

  test("default event number is 32", () => {
   expect(NumberOfEventsWrapper.state('eventsShown')).toBe(32);
  });

  test('change number of events when input changes', () => {
    const eventNumbersObject = { target: { value: 12 }};
    NumberOfEventsWrapper.find('.eventNumberInput').simulate('change', eventNumbersObject);
    expect(NumberOfEventsWrapper.state('eventsShown')).toBe(12);
  });
});
