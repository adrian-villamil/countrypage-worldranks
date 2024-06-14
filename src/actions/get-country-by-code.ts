'use server';

import type { Country } from "@/interfaces";

const fields = [
  'flags', 'name', 'population',
  'area', 'region', 'subregion',
  'capital', 'languages', 'currencies', 
  'continents', 'borders', 'cca3'
];

export const getCountryByCode = async (cca3: string): Promise<Country | null> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}?fields=${fields.join(',')}`);

  if (!response.ok) return null;

  return response.json();
};