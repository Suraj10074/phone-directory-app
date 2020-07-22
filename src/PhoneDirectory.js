import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
//import ShowSubscriber from './ShowSubscriber';

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
                <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />
             //  <ShowSubscriber subscribersList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory;