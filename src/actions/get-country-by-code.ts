'use server';

import { Country } from "@/interfaces/country.interface";

export const getCountryByCode = async (cca3: string): Promise<Country | null> => {
  const response = await fetch(`http://localhost:3000/api/country/${cca3}`);

  if (!response.ok) return null;

  return response.json();
};