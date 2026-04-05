import { InventoryItem, KPI, VerificationItem } from './types';

export const mockInventory: InventoryItem[] = [
  { id: '1', code: 'RM-001', name: 'Steel Sheet 2mm', category: 'Raw Material', quantity: 1200, rate: 450, value: 540000, warehouse: 'Warehouse A', lastUpdated: '2026-04-01' },
  { id: '2', code: 'RM-002', name: 'Aluminum Coil', category: 'Raw Material', quantity: 800, rate: 1200, value: 960000, warehouse: 'Warehouse B', lastUpdated: '2026-04-02' },
  { id: '3', code: 'FG-101', name: 'Gearbox Assembly', category: 'Finished Goods', quantity: 45, rate: 15000, value: 675000, warehouse: 'Warehouse A', lastUpdated: '2026-04-03' },
  { id: '4', code: 'FG-102', name: 'Hydraulic Pump', category: 'Finished Goods', quantity: 30, rate: 22000, value: 660000, warehouse: 'Warehouse C', lastUpdated: '2026-04-01' },
  { id: '5', code: 'SP-201', name: 'Bearing 6205', category: 'Spares', quantity: 500, rate: 120, value: 60000, warehouse: 'Warehouse B', lastUpdated: '2026-04-04' },
  { id: '6', code: 'SP-202', name: 'V-Belt B54', category: 'Spares', quantity: 200, rate: 350, value: 70000, warehouse: 'Warehouse A', lastUpdated: '2026-04-02' },
  { id: '7', code: 'RM-003', name: 'Copper Wire 1.5mm', category: 'Raw Material', quantity: 1500, rate: 650, value: 975000, warehouse: 'Warehouse C', lastUpdated: '2026-04-03' },
  { id: '8', code: 'FG-103', name: 'Electric Motor 5HP', category: 'Finished Goods', quantity: 15, rate: 35000, value: 525000, warehouse: 'Warehouse B', lastUpdated: '2026-04-04' },
];

export const mockKPIs: KPI[] = [
  { label: 'Total Stock Quantity', value: '4,290', change: 5.2, icon: 'Package' },
  { label: 'Inventory Value', value: '44,65,000', prefix: '₹', change: 2.1, icon: 'IndianRupee' },
  { label: 'Variance (Physical vs System)', value: '-12', change: -0.5, icon: 'Scale' },
  { label: 'Low Stock Alerts', value: '8', change: 0, icon: 'AlertTriangle' },
  { label: 'Dead Stock', value: '₹ 1,25,000', icon: 'Trash2' },
];

export const mockVerification: VerificationItem[] = mockInventory.map(item => ({
  ...item,
  physicalQuantity: null,
  variance: null,
  status: 'Pending',
}));

export const mockValuationMethods = [
  { name: 'FIFO (First-In, First-Out)', description: 'Assumes oldest inventory is sold first.', value: 4465000 },
  { name: 'Weighted Average', description: 'Average cost of all units available.', value: 4380000 },
  { name: 'Standard Cost', description: 'Predetermined cost based on historical data.', value: 4250000 },
];
