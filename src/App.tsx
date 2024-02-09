import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Map from './components/map/Map'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import LogIn from './components/pages/LogIn'
import ForgotPassword from './components/pages/ForgotPassword'
import Location from './components/pages/Location'
import Profile from './components/pages/Profile'
import Submit from './components/pages/Submit'
import Home from './components/pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute'
import Search from './components/search/Search'
import { PacmanLoader } from 'react-spinners';
import {toast} from 'react-toastify'

interface Locations {
  properties: {
    Name: string;
    description: string;
    gx_media_links: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
};
}

const fetchData = async (): Promise<Locations[]> => {
  try {
    const response = await fetch('https://github.com/Jxkeorton/APIs/blob/main/cliffjump.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    const locations: Locations[] = data.locations;
    return locations;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

function App() {
  const [eventData, setEventData] = useState<Locations[]>([])
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const locations = await fetchData();
        setEventData(locations);
      } catch (error) {
        toast.error('Error fetching locations');
        console.error(error)
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);
    

  const override: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  };

  if(loading) {
    return <PacmanLoader color="black" cssOverride={override} />
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/' element={<PrivateRoute />} >
            <Route path='/' element={<Map eventData={eventData} />} />
          </Route>
          <Route path='/profile' element={<PrivateRoute />} >
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/search-locations' element={<PrivateRoute />} >
            <Route path='/search-locations' element={<Search />} />
          </Route>
          <Route path='/location/:locationId' element={<PrivateRoute />} >
            <Route path='/location/:locationId' element={<Location />} />
          </Route>
          <Route path='/submit' element={<PrivateRoute />} >
            <Route path='/submit' element={<Submit/>} />
          </Route>
          <Route path='/home' element={<PrivateRoute />} >
            <Route path='/home' element={<Home/>} />
          </Route>
        </Routes>
        <Header />
      </Router>
      

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         />
      <Footer />
    </>
  )
}

export default App
