import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/normalize.css/normalize.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);


