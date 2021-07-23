import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";

import Admins from "./admins/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admins" component={Admins} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToprops = (state) => {
  return { fireStore: state.firestore.ordered.menulink };
};

export default compose(
  firestoreConnect(() => ["menulink"]), // or { collection: 'todos' }
  connect(mapStateToprops)
)(App);
