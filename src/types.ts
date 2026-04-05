export interface InventoryItem {
  id: string;
  code: string;
  name: string;
  category: string;
  quantity: number;
  rate: number;
  value: number;
  warehouse: string;
  lastUpdated: string;
}

export interface KPI {
  label: string;
  value: string | number;
  change?: number;
  icon: string;
  prefix?: string;
}

export interface ValuationMethod {
  name: string;
  description: string;
  value: number;
}

export interface VerificationItem extends InventoryItem {
  physicalQuantity: number | null;
  variance: number | null;
  status: 'Matched' | 'Shortage' | 'Excess' | 'Pending';
}
