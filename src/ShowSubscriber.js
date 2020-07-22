import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import { Link } from 'react-router-dom';

class ShowSubscriber extends Component {

  onDeleteClick = (subscribersId) => {
    this.props.deleteSubscriberHandler(subscribersId);
  }

  render() {
    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item name-heading">Phone</span>
          </div>

          {
            this.props.subscribersList.map(sub => {
              return (
                <div key={sub.id} className="grid-container">
                  <span className="grid-item">{sub.name}</span>
                  <span className="grid-item">{sub.phone}</span>
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.onDeleteClick.bind(this, sub.id)}>
                    Delete
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default ShowSubscriber;