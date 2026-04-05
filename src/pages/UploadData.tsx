import React, { useState } from 'react';
import { Button } from '../components/Button';
import { 
  UploadCloud, 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  Settings2,
  Table as TableIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from '../components/Badge';

type Step = 'upload' | 'mapping' | 'preview' | 'complete';

const mappingFields = [
  { id: 'item_name', label: 'Item Name', required: true },
  { id: 'item_code', label: 'Item Code', required: true },
  { id: 'quantity', label: 'Quantity', required: true },
  { id: 'rate', label: 'Rate', required: true },
  { id: 'value', label: 'Value', required: false },
  { id: 'warehouse', label: 'Warehouse', required: false },
  { id: 'date', label: 'Date', required: false },
];

const detectedColumns = ['Product Name', 'SKU', 'Stock Qty', 'Unit Price', 'Total Cost', 'Location', 'Last Updated'];

export const UploadData: React.FC = () => {
  const [step, setStep] = useState<Step>('upload');
  const [isDragging, setIsDragging] = useState(false);

  const renderStepProgress = () => (
    <div className="flex items-center justify-between max-w-2xl mx-auto mb-12">
      {[
        { id: 'upload', label: 'Upload' },
        { id: 'mapping', label: 'Map Columns' },
        { id: 'preview', label: 'Preview' },
        { id: 'complete', label: 'Complete' },
      ].map((s, i, arr) => (
        <React.Fragment key={s.id}>
          <div className="flex flex-col items-center gap-2">
            <div className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all',
              step === s.id ? 'bg-primary text-white border-primary' : 
              arr.findIndex(x => x.id === step) > i ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-400 border-border'
            )}>
              {arr.findIndex(x => x.id === step) > i ? <CheckCircle2 size={20} /> : i + 1}
            </div>
            <span className={cn(
              'text-xs font-bold uppercase tracking-wider',
              step === s.id ? 'text-primary' : 'text-gray-400'
            )}>{s.label}</span>
          </div>
          {i < arr.length - 1 && (
            <div className={cn(
              'flex-1 h-0.5 mx-4',
              arr.findIndex(x => x.id === step) > i ? 'bg-green-500' : 'bg-border'
            )}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderUpload = () => (
    <div className="max-w-3xl mx-auto">
      <div 
        className={cn(
          'border-2 border-dashed rounded-xl p-16 flex flex-col items-center justify-center gap-6 transition-all cursor-pointer',
          isDragging ? 'border-accent bg-accent/5' : 'border-border bg-white hover:border-accent hover:bg-accent/5'
        )}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); setStep('mapping'); }}
        onClick={() => setStep('mapping')}
      >
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
          <UploadCloud size={40} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary mb-2">Drag and drop your file here</h3>
          <p className="text-gray-500">Supports .xlsx, .xls, .csv files from ERP, Tally, or Excel</p>
        </div>
        <Button size="lg" className="px-12">Browse Files</Button>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Tally ERP 9', icon: FileSpreadsheet },
          { name: 'SAP Business One', icon: FileSpreadsheet },
          { name: 'Custom Excel', icon: FileSpreadsheet },
        ].map((source, i) => (
          <div key={i} className="p-4 bg-white border border-border rounded-lg flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-primary">
              <source.icon size={20} />
            </div>
            <span className="text-sm font-bold text-primary">{source.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMapping = () => (
    <div className="max-w-4xl mx-auto bg-white rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings2 size={20} className="text-primary" />
          <h3 className="font-bold text-primary">Map Columns</h3>
        </div>
        <Badge variant="info">7 Columns Detected</Badge>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-6">
          {mappingFields.map((field) => (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-primary">{field.label}</span>
                {field.required && <span className="text-red-500">*</span>}
              </div>
              <div className="md:col-span-2">
                <select className="w-full p-2.5 bg-white border border-border rounded-md text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none">
                  <option value="">Select Column...</option>
                  {detectedColumns.map((col, i) => (
                    <option key={i} value={col}>{col}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-gray-50 border-t border-border flex justify-between">
        <Button variant="outline" onClick={() => setStep('upload')} className="gap-2">
          <ArrowLeft size={18} />
          Back
        </Button>
        <Button onClick={() => setStep('preview')} className="gap-2 px-12">
          Continue
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TableIcon size={20} className="text-primary" />
            <h3 className="font-bold text-primary">Data Preview</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <CheckCircle2 size={16} />
              <span>124 Rows Valid</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
              <AlertCircle size={16} />
              <span>2 Errors Found</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Code</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Item Name</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Rate</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { code: 'RM-001', name: 'Steel Sheet', qty: 1200, rate: 450, status: 'valid' },
                { code: 'RM-002', name: 'Aluminum Coil', qty: 'N/A', rate: 1200, status: 'error' },
                { code: 'FG-101', name: 'Gearbox', qty: 45, rate: 15000, status: 'valid' },
                { code: 'FG-102', name: 'Hydraulic Pump', qty: 30, rate: 'invalid', status: 'error' },
              ].map((row, i) => (
                <tr key={i} className={cn('hover:bg-gray-50', row.status === 'error' && 'bg-red-50/50')}>
                  <td className="px-6 py-4 text-sm font-mono">{row.code}</td>
                  <td className="px-6 py-4 text-sm font-medium">{row.name}</td>
                  <td className={cn('px-6 py-4 text-sm font-medium', row.qty === 'N/A' && 'text-red-500')}>{row.qty}</td>
                  <td className={cn('px-6 py-4 text-sm font-medium', row.rate === 'invalid' && 'text-red-500')}>{row.rate}</td>
                  <td className="px-6 py-4 text-sm">
                    {row.status === 'valid' ? (
                      <Badge variant="success">Ready</Badge>
                    ) : (
                      <Badge variant="error">Fix Required</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-6 flex items-start gap-4">
        <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
        <div>
          <h4 className="font-bold text-red-900 mb-2">Validation Errors Found</h4>
          <p className="text-sm text-red-700 leading-relaxed">
            2 rows contain invalid data formats. Please correct the highlighted fields in your file and re-upload, or fix them manually in the next step.
          </p>
          <div className="mt-4 flex gap-4">
            <Button variant="outline" size="sm" className="bg-white border-red-200 text-red-700 hover:bg-red-50">Manual Fix</Button>
            <Button variant="outline" size="sm" className="bg-white border-red-200 text-red-700 hover:bg-red-50">Download Error Log</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white p-6 rounded-xl border border-border shadow-sm">
        <Button variant="outline" onClick={() => setStep('mapping')} className="gap-2">
          <ArrowLeft size={18} />
          Back to Mapping
        </Button>
        <div className="flex gap-4">
          <Button variant="outline">Save as Draft</Button>
          <Button onClick={() => setStep('complete')} className="px-12">Confirm Import</Button>
        </div>
      </div>
    </div>
  );

  const renderComplete = () => (
    <div className="max-w-2xl mx-auto text-center py-12 flex flex-col items-center gap-8">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center scale-110">
        <CheckCircle2 size={48} />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold text-primary">Import Successful!</h2>
        <p className="text-lg text-gray-600">
          124 items have been successfully imported into your inventory. Your valuation has been updated automatically.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
        <div className="p-6 bg-white border border-border rounded-xl">
          <p className="text-sm text-gray-500 font-medium mb-1">Items Added</p>
          <p className="text-2xl font-bold text-primary">124</p>
        </div>
        <div className="p-6 bg-white border border-border rounded-xl">
          <p className="text-sm text-gray-500 font-medium mb-1">Total Value</p>
          <p className="text-2xl font-bold text-primary">₹44.6L</p>
        </div>
        <div className="p-6 bg-white border border-border rounded-xl">
          <p className="text-sm text-gray-500 font-medium mb-1">Warehouses</p>
          <p className="text-2xl font-bold text-primary">3</p>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <Button onClick={() => window.location.href = '/app/inventory'} size="lg" className="px-12">View Inventory</Button>
        <Button variant="outline" onClick={() => setStep('upload')} size="lg">Upload Another</Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      {renderStepProgress()}
      <div className="mt-8">
        {step === 'upload' && renderUpload()}
        {step === 'mapping' && renderMapping()}
        {step === 'preview' && renderPreview()}
        {step === 'complete' && renderComplete()}
      </div>
    </div>
  );
};
