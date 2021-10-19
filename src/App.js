import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavSpace from './components/NavSpace/NavSpace';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import AuthProvider from './context/authProvider';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavSpace></NavSpace>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/details/:detailsId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/about'>
              <AboutUs></AboutUs>
            </PrivateRoute>
            <PrivateRoute path='/contact'>
              <Contact></Contact>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
