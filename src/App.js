
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Componants/About/About';
import AddNewPackage from './Componants/AddNewPackage/AddNewPackage';
import Contact from './Componants/Contact/Contact';
import Footer from './Componants/Footer/Footer';
import Headers from './Componants/Headers/Headers';
import Booking from './Componants/Home/Booking/Booking';
import Home from './Componants/Home/Home';
import Login from './Componants/Login/Login';
import ManageAllBooking from './Componants/ManageAllBookings/ManageAllBooking';
import MyBookings from './Componants/MyBookings/MyBookings';
import NotFound from './Componants/NotFound/NotFound';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Headers></Headers>
        <Switch>
           <Route exact path="/">
                   <Home></Home>
           </Route>
           <Route exact path="/Home">
                   <Home></Home>
           </Route>
           
           <PrivateRoute exact path="/Booking/:packageId">
                   <Booking></Booking>
           </PrivateRoute>

           <Route exact path="/About">
                   <About></About>
           </Route>
           <Route exact path="/Contact">
                   <Contact></Contact>
           </Route>
           <PrivateRoute exact path="/myBookings">
                   <MyBookings></MyBookings>
           </PrivateRoute>
           <PrivateRoute exact path="/manageAllBookings">
                   <ManageAllBooking></ManageAllBooking>
           </PrivateRoute>
           <PrivateRoute exact path="/addNewPackage">
                   <AddNewPackage></AddNewPackage>
           </PrivateRoute>
           <Route exact path="/Login">
                   <Login></Login>
           </Route>
           <Route  path="*">
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
