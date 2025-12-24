// src/App.js
import React, { useState } from 'react';

// import Aboutus from './components/Aboutus';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Sign';

import Appbar from './components/Appbar';
import Vegetable from './components/Vegetable';
import GroceryPage from './components/Vegetable';
import Video from './components/Video';
import FarmingNews from './components/Farming';
import CoimbatoreShops from './components/Shop';
import VideoGallery from './components/Watchvideo';
import Create from './components/Create';
import Story from './components/Story';
import ContactUs from './components/Contact';
import About from './components/About';
import CartPage from './components/Cartpage';
import Shop1 from './components/Shop1';
import Rice from './components/Rice';
import Sugarcane from './components/Sugarcane';
import Groundnut from './components/Groundnut';
import Pulses from './components/Pulses';
import Millets from './components/Millets';
import Coconut from './components/Coconut';
import Banana from './components/Banana';
import Spices from './components/Spices';
import { Provider } from 'react';
import { userContext } from './components/Context';
import Footer from './components/Footer';
import FeedbackForm from './components/Feedbackform';
import FeedbackDetails from './components/Feedbackdetails';
import ComplaintForm from './components/Complaint';
import VegetablePriceChart from './components/Vegetableprice';
import Piechart from './components/Piechart';
import LoginForm from './components/Shop3';



const App = () => {
   const [user,setuser]=useState("");
  return (
       <userContext.Provider value={[user, setuser]}>
    <Router>
    
      <Routes>
        <Route   path="/" element={<Appbar></Appbar>}>
			  <Route index element={<Home></Home>} />
        <Route index element={<Footer></Footer>}></Route>
		{/* <Route path="/" element={<Home></Home>}></Route> */}

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign" element={<Signup></Signup>}></Route>
        <Route path="/veg" element={<GroceryPage></GroceryPage>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/farming" element={<FarmingNews></FarmingNews>}></Route>
        <Route path="/shop" element={<CoimbatoreShops></CoimbatoreShops>}></Route>
        <Route path="/videogal" element={<VideoGallery></VideoGallery>}></Route>
     <Route path="/create" element={<Create></Create>}></Route>
     <Route path="/story" element={<Story></Story>}></Route>
     <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
     <Route path="/about" element={<About></About>}></Route>
     <Route path="/cart" element={<CartPage></CartPage>}></Route>
     <Route path="/shop1" element={<Shop1></Shop1>}></Route>
     <Route path="/rice" element={<Rice></Rice>}></Route>
     <Route path="/sugarcane" element={<Sugarcane></Sugarcane>}></Route>
     <Route path="/groundnut" element={<Groundnut></Groundnut>}></Route>
     <Route path="/pulses" element={<Pulses></Pulses>}></Route>
     <Route path='/millets' element={<Millets></Millets>}></Route>
     <Route path="/coconut" element={<Coconut></Coconut>}></Route>
     <Route path="/banana" element={<Banana></Banana>}></Route>
     <Route path="/spice" element={<Spices></Spices>}></Route>
     <Route path="/feedback" element={<FeedbackForm/>}></Route>
     <Route path="/feedbackdetails" element={<FeedbackDetails></FeedbackDetails>}/>
     <Route path="/complaint" element={<ComplaintForm></ComplaintForm>}></Route>
     <Route path="/price" element={<VegetablePriceChart></VegetablePriceChart>}></Route>
     <Route path="/piechart" element={<Piechart></Piechart>}></Route>
     <Route path="/lo" element={<LoginForm></LoginForm>}></Route>
      </Route>
      </Routes>
    </Router>
     </userContext.Provider>
  );
};

export default App;