import React, { Component } from 'react';

/* component */
import UserInputComponent from './Components/UserInputComponent';

class HomeComponent extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <div className="card mt-3">
          <div className="card-header bg-primary text-white">Form Input</div>
          <div className="card-body">
            <UserInputComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
