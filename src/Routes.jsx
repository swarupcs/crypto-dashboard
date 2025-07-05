import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  );
};
