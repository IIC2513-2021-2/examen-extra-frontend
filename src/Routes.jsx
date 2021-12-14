import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EditExpedition from './views/EditExpedition';
import ExpeditionDetail from './views/ExpeditionDetail';
import Expeditions from './views/Expeditions';
import Home from './views/Home';
import NewMember from './views/NewMember';
import NotFound from './views/NotFound';
import Theory from './views/Theory';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="theory" element={<Theory />} />
      <Route path="expeditions" element={<Expeditions />} />
      <Route path="expeditions/:id" element={<ExpeditionDetail />} />
      <Route path="expeditions/:id/edit" element={<EditExpedition />} />
      <Route path="expeditions/:id/members/new" element={<NewMember />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
