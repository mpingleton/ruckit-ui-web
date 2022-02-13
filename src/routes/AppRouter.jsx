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
import CallDetails from '../pages/CallDetails';
import PlaceCall from '../pages/PlaceCall';
import Messages from '../pages/Messages';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlankLayout><Main /></BlankLayout>} />
        <Route path="/login" element={<BlankLayout><Login /></BlankLayout>} />
        <Route path="/calls/new" element={<MainLayout title="New Call"><PlaceCall /></MainLayout>} />
        <Route path="/calls/id/:callId" element={<MainLayout title="Call Details"><CallDetails /></MainLayout>} />
        <Route path="/calls" element={<MainLayout title="Calls"><Calls /></MainLayout>} />
        <Route path="/messages" element={<MainLayout title="Messages"><Messages /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
