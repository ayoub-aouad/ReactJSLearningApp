import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import ProductsCard from './ProductsCard';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Register from './Register';
import Loggin from './Loggin';
import Create from './Create';
import ContactUs from './ContactUs';
import BlogsDetails from './BlogDetails';

function App() {

  return (
    <div className="App">
    <Navbar />
    <Router>
      <Switch>
        <Route exact path ='/'>
          <Home />
        </Route>
        <Route exact path ='/contactus'>
          <ContactUs />
        </Route>
        <Route exact path ='/register'>
          <Register />
        </Route>
        <Route exact path ='/loggin'>
          <Loggin />
        </Route>
        <Route exact path ='/create'>
          <Create />
        </Route>
        <Route  path ='/blogs/:id'>
          <BlogsDetails />
        </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
