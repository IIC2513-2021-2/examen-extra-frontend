import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import EditExpedition from './views/EditExpedition';
import ExpeditionDetail from './views/ExpeditionDetail';
import Expeditions from './views/Expeditions';
import Home from './views/Home';
import Login from './views/Login';
import NewExpedition from './views/NewExpedition';
import NewMember from './views/NewMember';
import NotFound from './views/NotFound';
import Theory from './views/Theory';
import TheoryExtra from './views/TheoryExtra';

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="theory" element={<Theory />} />
        <Route path="theory-extra" element={<TheoryExtra />} />
        <Route path="login" element={<Login />} />
        <Route path="expeditions" element={<Expeditions />} />
        <Route path="expeditions/new" element={<NewExpedition />} />
        <Route path="expeditions/:id" element={<ExpeditionDetail />} />
        <Route path="expeditions/:id/edit" element={<EditExpedition />} />
        <Route path="expeditions/:id/members/new" element={<NewMember />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
