import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';

describe('<Event /> component', () => {
  let EventWrapper;
  const events =
      {
          created: 1591259707000,
          duration: 14400000,
          id: "271074698",
          name: "ALL Berlin August 2020 - Summer Version (Location tbd)",
          rsvp_limit: 130,
          date_in_series_pattern: false,
          status: "upcoming",
          time: 1597410000000,
          local_date: "2020-08-14",
          local_time: "15:00",
          updated: 1591259724000,
          utc_offset: 7200000,
          waitlist_count: 0,
          yes_rsvp_count: 35,
          is_online_event: false,
          group: {
            created: 1539942154000,
            name: "Agile Learning Lab Berlin (fka ScrumMaster Clinic)",
            id: 30349816,
            join_mode: "open",
            lat: 52.52000045776367,
            lon: 13.380000114440918,
            urlname: "Agile-Learning-Lab-Berlin",
            who: "Agilists",
            localized_location: "Berlin, Deutschland",
            state: "",
            country: "de",
            region: "de_DE",
            timezone: "Europe/Berlin"
            },
          link: "https://www.meetup.com/de-DE/Agile-Learning-Lab-Berlin/events/271074698/",
          description: "<p>Are you an agile practitioner or learner? Scrum Master, Product Owner, Developer, Agile Coach? This is our space to learn together. Bring your challenge, opportunity or problem! Anything you want to practice or learn ...</p> <p>This afternoon will be all about learning. We will create a list of topics and form small groups to work together. Options include: - ask for help with a current situation - bring and practice a method or technique - this space is safe to fail! - practice coaching, where the coach and the coachee both learn.</p> <p>Let's practice and learn together! We are, of course, open for suggestions just fill out this survey to let us know your ideas.</p> ",
          visibility: "public",
          member_pay_fee: false
      }

  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

  test('event details hidden by default', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('details button renders', () => {
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  });

  test('show details on button click', () => {
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('hide details on button click', () => {
    expect(EventWrapper.setState({ showDetails: true }));
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('check event data is rendered correctly', () => {
    expect(EventWrapper.find('.eventName').text()).toBe('ALL Berlin August 2020 - Summer Version (Location tbd)');
   });

   test('check that eventDescription is rendered', () => {
   EventWrapper.setState({ showDetails: true });
   expect(EventWrapper.find('.eventDescription')).toHaveLength(1);
  });
});
