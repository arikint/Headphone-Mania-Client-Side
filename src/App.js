import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProcessOrder from './components/ProcessOrder/ProcessOrder';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/explore">
            <Explore></Explore>
            </Route>
            <PrivateRoute path="/exploreitem/:_id">
              <ProcessOrder></ProcessOrder>
            </PrivateRoute>
            <PrivateRoute path="/orderplaced">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
