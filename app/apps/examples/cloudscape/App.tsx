import React from 'react';
import { Route, Routes } from '@remix-run/react';
import CloudscapeThemeProvider from "~/apps/design-systems/cloudscape/components/CloudscapeThemeProvider.tsx"
import AppLayout from './AppLayout';
import Dashboard from './pages/Dashboard';
import OrderForm from './pages/OrderForm';

const App = () => {
  return (
    <CloudscapeThemeProvider>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/createOrder' element={<OrderForm />} />
        </Routes>
      </AppLayout>
    </CloudscapeThemeProvider>
  );
};

export default App;
