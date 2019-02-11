import React, { Component } from 'react';
import { connect } from 'react-redux';

/* component */
import UserInputComponent from './Components/UserInputComponent';

class HomeComponent extends Component {
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

const mapStateToProps = state => ({
  formData: state.rootReducer.formDataValue
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
