import { seedCountries } from '@/seed/seed-contries';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { cca3: string } }) {
  const { cca3 } = params;
  const country = seedCountries.find((country) => country.cca3 === cca3);

  return NextResponse.json(country, { status: 200 });
}