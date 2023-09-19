import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from './layout/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <App />
  <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function

