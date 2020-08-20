import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';



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
    const colors = ['#D8D8D8','#eb3d9c'];
    const data = [
      { name: 'attendees', value: event.yes_rsvp_count },
      { name: 'free spots', value: event.rsvp_limit - event.yes_rsvp_count }
    ];
    return (
      <div className="Event">
        <p className="eventDate">{event.local_date}</p>
        <h2 className="eventName">{event.name}</h2>
         {this.props.event.rsvp_limit && this.props.event.yes_rsvp_count ?
        <div className="EventChart">
          <ResponsiveContainer height={200} >
            <PieChart>
              <Pie data={data} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={52} innerRadius={30} label>
                {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))}
              </Pie>
              <Legend iconSize={5} iconType='circle' layout='horizontal' verticalAlign='bottom' align='center' />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        : <i>*No RSVP limit - YEAY!</i>
       }
       <br />
       <br />
        <button
          className="details-btn"
          onClick={() => this.handleShowDetails()}>
          Details
        </button>
        {showDetails && (
          <div className="eventDetails">
            <p className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></p>
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default Event;
