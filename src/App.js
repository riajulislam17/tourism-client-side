import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Event from './Component/Event/Event';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Manage from './Component/Manage/Manage';
import Blog from './Component/Blog/Blog';
import UpdateEvent from './Component/UpdateEvent/UpdateEvent';
import Details from './Component/Details/Details';
import ManageTask from './Component/ManageTask/ManageTask';

function App () {
  return (
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
          <PrivateRoute path="/event">
            <Event></Event>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/updateBlog/:id">
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
          <PrivateRoute path="/detailsBlog/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute path="/manageTask">
            <ManageTask></ManageTask>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
