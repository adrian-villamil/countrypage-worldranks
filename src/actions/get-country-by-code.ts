'use server';

import type { Country } from "@/interfaces";

export const getCountryByCode = async (cca3: string): Promise<Country | null> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);

  if (!response.ok) return null;

  const country: Country[] = await response.json();

  return country[0];
};