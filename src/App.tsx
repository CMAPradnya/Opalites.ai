/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MarketingLayout } from './components/MarketingLayout';
import { AppLayout } from './components/AppLayout';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { UploadData } from './pages/UploadData';
import { Inventory } from './pages/Inventory';
import { PhysicalVerification } from './pages/PhysicalVerification';
import { Valuation } from './pages/Valuation';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing Website Routes */}
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Dashboard App Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="upload" element={<UploadData />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="verification" element={<PhysicalVerification />} />
          <Route path="valuation" element={<Valuation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

