import { seedCountries } from '@/seed/seed-contries';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json(seedCountries, { status: 200 });
}