import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee'
import ViewEmployees from './components/ViewEmployees'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="create-employee" element={<CreateEmployee />} />
            <Route path="view-employees" element={<ViewEmployees /> } />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);