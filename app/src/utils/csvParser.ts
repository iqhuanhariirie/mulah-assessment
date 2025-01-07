import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

export interface TableRow {
  index: string;
  value: number;
}

export function readCSVFile(): TableRow[] {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Table_Input.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    return records.map((record: any) => ({
      index: record['Index #'],
      value: parseInt(record['Value'], 10)
    }));
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return [];
  }
}
