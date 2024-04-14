import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/Dashboard/Admin/HomeScreen';
import NotFound from './Screens/Dashboard/Admin/NotFound';
import AboutUs from './Screens/Dashboard/Admin/AboutUs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Use BrowserRouter as Router */}
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
