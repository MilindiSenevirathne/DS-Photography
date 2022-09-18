import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./Pages/Events";
import Fashion from "./Pages/Fashion";
import Home from "./Pages/Home";
import Preshoots from "./Pages/Preshoots";
import Weddings from "./Pages/Weddings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/preshoot" element={<Preshoots/>}/>
          <Route path="/fashion" element={<Fashion/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
