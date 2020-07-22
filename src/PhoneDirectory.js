import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: "Suraj Singh",
                    phone: "9999999999"
                },
                {
                    id: 2,
                    name: "Ronit Singh Thakur",
                    phone: "8888888888"
                }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }

    render() {
        return (
            <Router>
                <Route exact path="/" render={(props) => <ShowSubscriber{...props} subscribersList={this.state.subscribersList} />} />
                <Route exact path="/add" render={({ history }, props) => <AddSubscriber{...props} history={history} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Router>
        )
    }
}

export default PhoneDirectory;