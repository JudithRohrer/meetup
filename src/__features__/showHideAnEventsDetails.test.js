import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';

const feature = loadFeature('./src/__features__/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('A list of events has been loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('User hasn’t yet click the “show details” button on a certain event', () => {
    });

    then('The events element are collapsed by default', () => {
      expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
    });
  });


  test('User can expand an event to see its details', ({ given, when, then }) => {
      let AppWrapper;
      given('A list of events has been loaded', () => {
        AppWrapper = mount(<App />);
        AppWrapper.update();
      });

      when('User clicks on ”show details” button of a certain event', () => {
        AppWrapper.update();
        AppWrapper.find('.details-btn').at(0).simulate('click');
      });

      then('This certain event expands and shows event information for the user', () => {
        expect(AppWrapper.find('.eventDescription')).toHaveLength(1);
      });
  });


  test('User can collapse an event to hide its details', ({ given, when, then }) => {
      let AppWrapper;
      given('User has expanded a certain event for more details', () => {
        AppWrapper = mount(<App />);
      });

      when('User clicks ”hide details” button of this event', () => {
        AppWrapper.update();
        AppWrapper.find('.details-btn').at(0).simulate('click');
        AppWrapper.find('.details-btn').at(0).simulate('click');
      });

      then('The information collapses', () => {
        expect(AppWrapper.find('.eventDescription')).toHaveLength(0);
      });
  });
});
