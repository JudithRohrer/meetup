import React, { Component } from 'react';


class NumberOfEvents extends Component {
  state = {
    eventsShown: 32
  };

  handleInputChanged = (event) => {
      const value = event.target.value;
      this.setState({ eventsShown: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="eventNumberInput"
          value={this.state.eventsShown}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
