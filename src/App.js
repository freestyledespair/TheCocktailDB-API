import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cocktail from './Pages/Cocktail';
import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail-detail/:id" element={<Cocktail />} />
        <Route path="/ingredient-detail/:name" element={<Ingredients />} />
        <Route path="*" element={<h1>Error 404!!! Page not found.</h1>} />
      </Routes>
    </div>
  );
};

export default App;