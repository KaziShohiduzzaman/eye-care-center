import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavSpace from './components/NavSpace/NavSpace';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div>
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
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
