import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

/* Loading Component */
const MyLoadingComponent = ({ isLoading, error }) => {
  /* Handle the loading state */
  if (isLoading) {
    return <div className="loader" />;
  } else if (error) {
    /* Handle the error state */
    return (
      <div style={{ color: 'red' }}>
        <p>Sorry, there was a problem loading the page.</p>
      </div>
    );
  } else {
    return null;
  }
};

const LoadableHomeComponent = Loadable({
  loader: () => import('../Pages/Home'),
  loading: MyLoadingComponent
});

const Web = () => (
  <Router>
    <>
      <Route exact path="/" component={LoadableHomeComponent} />
    </>
  </Router>
);

export default Web;
