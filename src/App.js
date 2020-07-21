import React, { Component } from 'react';
import Header from './Header';
import './App.css'

// let subscribers = [
//   {
//     name:"Suraj Singh",
//     phone:8962922260,
//     id:1
//   },
//   {
//     name:"Rohit Singh",
//     phone:9999999999,
//     id:2
//   }
// ]

class App extends Component {
  constructor(){
    super()
    this.state = {
      subscribersListToShow : []
    }
  }
  render() {

    return (
      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
            <button className="custom-btn add-btn">Add</button>

            <div className="grid-container heading-container">
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item name-heading">Phone</span>
            </div>

            {
              this.state.subscribersListToShow.map(sub => {
                return (
                  <div key={sub.id} className="grid-container"> 
                    <span className="grid-item">{sub.name}</span>
                    <span className="grid-item">{sub.phone}</span>
                    <button className="custom-btn delete-btn" onClick={this.deleteHandler}> Delete </button>
                  </div>
                  );
                })
            }
        </div>
      </div>
    );
  }
}

export default App;
