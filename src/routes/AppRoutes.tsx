import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutDefault from '../config/layout/LayoutDefault';
import Home from '../pages/Home/Home';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault componente={Home} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
