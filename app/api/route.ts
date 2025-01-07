import { readCSVFile } from '@/src/utils/csvParser';
import { NextResponse } from 'next/server';


export async function GET() {
  const data = readCSVFile();
  return NextResponse.json({ data });
}