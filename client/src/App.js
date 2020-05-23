import React, {useContext} from 'react';
import { AuthContext } from './Context/AuthContext';

import Home from './Components/Home';
import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  return (
    <Router>
      <NavBar />

      <Route exact path="/" component={Home} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/Register" component={Register} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />

    </Router>
  );
}

export default App;
