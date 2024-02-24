import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import { Home } from "./components/pages/Home";
import { ModelsPage } from "./components/pages/ModelsPage";
import { AboutUs } from "./components/pages/AboutUs";
import CabañasDetailPage from "./components/pages/CabañasDetailPage";
import MinimalistasDetailPage from "./components/pages/MinimalistasDetailPage";
import PremoldeadasDetailPage from "./components/pages/PremoldeadasDetailPage";
import IndustrializadasDetailPage from "./components/pages/IndustrializadasDetailPage";
import InterioresDetailPage from "./components/pages/InterioresDetailPage";
import "./css/index.css"

export const App = () => {
  return (
    <div>
      <Router>
      <Navbar />          
          <div >
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/ModelsPage" Component={ModelsPage} />
              <Route exact path="/Aboutus" Component={AboutUs} />
              <Route exact path="/model/Cabañas" Component={CabañasDetailPage}/>
              <Route exact path="/model/Minimalistas"Component={MinimalistasDetailPage}/>
              <Route exact path="/model/Premoldeadas" Component={PremoldeadasDetailPage}/>
              <Route exact path="/model/Industrializadas" Component={IndustrializadasDetailPage}/>
              <Route exact path="/model/Interiores" Component={InterioresDetailPage}/>
            </Routes>
          </div>
      </Router>
    </div>
  );
};

export default App;
