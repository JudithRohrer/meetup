import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import  { getEvents } from './api';
import { OnlineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    page: null
  };

  componentDidMount() {
    this.updateEvents();
  }


  updateEvents = (lat, lon, page) => {

    if(!navigator.onLine) {
      this.setState({
        onlineText: 'Working offline...',
      });
    } else {
      this.setState({
        onlineText: '',
      });
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
  } else if (page) {
    getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, page }));
  } else {
    getEvents(this.state.lat, this.state.lon, this.state.page).then(events => this.setState({ events }));
  }
    return this.updateEvents;
  };

  render() {
    return (
      <div className="App">
        <OnlineAlert text={this.state.onlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} />
      </div>
    );
  }
}

export default App;
