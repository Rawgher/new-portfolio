import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
// import Portfolio from "./pages/Portfolio";
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Portfolio />} /> */}
        <Route exact path="/" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route element={<NoMatch />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
