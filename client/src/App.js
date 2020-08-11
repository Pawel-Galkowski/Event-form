import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import EventForm from './components/form/EventForm';
import './stylesheet/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <main>
            <Switch>
              <Route exact path="/" component={EventForm} />
            </Switch>
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
