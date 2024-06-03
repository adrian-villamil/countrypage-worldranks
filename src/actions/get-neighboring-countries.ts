'use server';

import { Country } from "@/interfaces/country.interface";

export const getNeighboringCountries = async (borders: string[] | undefined): Promise<Country[]> => {
  if (!borders) return [];
  
  const codes = borders.join(',');
  const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,flags`);

  if (!response.ok) return [];

  return response.json();
};