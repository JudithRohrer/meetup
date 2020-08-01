import React, { Component } from 'react';


class NumberOfEvents extends Component {
  state = {
    eventsShown: 32
  };

  handleInputChanged = (event) => {
      const value = event.target.value;
      this.setState({ eventsShown: value });
      this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p>Show</p>
        <input
          type="number"
          className="eventNumberInput"
          value={this.state.eventsShown}
          onChange={this.handleInputChanged}
        />
        <p>Events</p>
      </div>
    );
  }
}

export default NumberOfEvents;
