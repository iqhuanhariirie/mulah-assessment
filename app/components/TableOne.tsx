'use client';

import { TableRow } from '@/src/utils/csvParser';
import { useEffect, useState } from 'react';


export default function TableOne() {
  const [tableData, setTableData] = useState<TableRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      const { data } = await response.json();
      setTableData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Table 1</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Index #</th>
            <th className="border border-gray-400 px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.index}>
              <td className="border border-gray-400 px-4 py-2">{row.index}</td>
              <td className="border border-gray-400 px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}