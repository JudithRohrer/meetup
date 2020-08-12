import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventsShown: 32
  };

  handleInputChanged = (event) => {
      const value = event.target.value;
      this.setState({ eventsShown: value });


      if (value <= 0) {
        this.setState({
          infoText: 'Number should be at least 1',
        });
      } else {
        this.setState({
          infoText: '',
        })
        this.props.updateEvents(null, null, value);
      }
  };

  render() {
    return (
      <div className="NumberOfEvents">
          <ErrorAlert text={this.state.infoText} />
          <input
          type="number"
          className="eventNumberInput"
          value={this.state.eventsShown}
          onChange={this.handleInputChanged}
        />
          <h5>Events shown</h5>
      </div>
    );
  }
}

export default NumberOfEvents;
