'use server';

import { Country } from "@/interfaces/country.interface";

export const getCountryByCode = async (cca3: string): Promise<Country[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);

  if (!response.ok) [];

  return response.json();
};