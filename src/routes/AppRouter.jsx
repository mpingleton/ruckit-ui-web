import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import BlankLayout from '../layouts/BlankLayout';
import MainLayout from '../layouts/MainLayout';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Calls from '../pages/Calls';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlankLayout><Main /></BlankLayout>} />
        <Route path="/login" element={<BlankLayout><Login /></BlankLayout>} />
        <Route path="/calls" element={<MainLayout><Calls /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
