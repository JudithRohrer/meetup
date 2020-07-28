import React, { Component } from 'react';


class Event extends Component {

  state = {
    showDetails: false,
    events: [],
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState( { showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;

    return (
      <div className="Event">
        <p className="eventDate">{event.local_date}</p>
        <h2 className="eventName">{event.name}</h2>
        <button
          className="details-btn"
          onClick={() => this.handleShowDetails()}>
          Details
        </button>
        {showDetails && (
          <div className="eventDetails">
            <p className="eventDescription">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
