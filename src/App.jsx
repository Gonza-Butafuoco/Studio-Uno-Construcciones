import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Navbar from "./components/organisms/Navbar";
import { Home } from "./components/pages/Home";
import { ModelsPage } from "./components/pages/ModelsPage";
import { Contact } from "./components/pages/Contact";
import { AboutUs } from "./components/pages/AboutUs";



export const App = () => {
  return (
    <div classname="sticky top-0">
      <Router>
        <div>

          <Navbar />








        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Contact" Component={Contact} />
          <Route exact path="/ModelsPage" Component={ModelsPage} />
          <Route exact path="/Aboutus" Component={AboutUs} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
