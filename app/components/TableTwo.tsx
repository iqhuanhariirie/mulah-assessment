'use client';

import { TableRow } from '@/src/utils/csvParser';
import { useEffect, useState } from 'react';


export default function TableTwo() {
  const [calculations, setCalculations] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const { data } = await response.json();
      
      const getValue = (index: string) => {
        const row = data.find((item: TableRow) => item.index === index);
        return row ? row.value : 0;
      };

      setCalculations({
        Alpha: getValue('A5') + getValue('A20'),
        Beta: getValue('A15') / getValue('A7'),
        Charlie: getValue('A13') * getValue('A12')
      });
    };

    fetchData();
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Table 2</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(calculations).map(([category, value]) => (
            <tr key={category}>
              <td className="border border-gray-400 px-4 py-2">{category}</td>
              <td className="border border-gray-400 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}