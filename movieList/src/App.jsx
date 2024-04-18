import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/Dashboard/Admin/HomeScreen';
import AboutUs from './Screens/Dashboard/Admin/AboutUs';
import Login from './Screens/Dashboard/Admin/Login';
import WatchMovie from './Screens/Dashboard/WatchMovie';
import WatchListPage from './Screens/Dashboard/Admin/WatchListPage';

function App() {
  const userEmail = localStorage.getItem('loggedInUser');

  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movies" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          ({userEmail&&
          <Route path="/watchList" element={<WatchListPage/> }/>})
          <Route path="*" element={<HomeScreen />} />
          {/* <Route path={"/movie/:id"||"/watchList/movie/:id"||"/movies/movie/:id"} element={<WatchMovie />} /> */}
          <Route path="/movie/:id" element={<WatchMovie />} />
          <Route path="/watchList/movie/:id" element={<WatchMovie />} />
          <Route path="/movies/movie/:id" element={<WatchMovie />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
