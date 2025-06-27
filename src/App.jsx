import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/home';
import Abouts from './pages/abouts';
import Donation from './pages/donation';
import Eventpage from './pages/eventpage';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contactus from './pages/contactus';
function App() {
  const [count, setCount] = useState(0)

  return (       
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* <Header /> */}
        <main className="flex-1">    
          <Routes>     
             {/* Back Office Routes */}
             
                <Route path="/" element={<Home />}/>              
                <Route path="/aboutus" element={<Abouts />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/events" element={<Eventpage />} />
                <Route path="/services" element={<Services/>} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contactus" element={<Contactus />} />
              
              {/* <Route path="*" element={<Navigate to="/" />} /> */}   
              </Routes>          
        </main>
        {/* <Footer /> */}
      </div>    
  );
}

export default App
