import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Main from '../pages/Main';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calls" element={<MainLayout></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
