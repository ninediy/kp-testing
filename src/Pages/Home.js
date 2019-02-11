import React, { Component } from 'react';
import HomeComponent from './../Feature/Home/HomeComponent';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12">
              <h4>Naruebaet Bouhom</h4>
            </div>
          </div>
        </div>
        <HomeComponent />
      </>
    );
  }
}
