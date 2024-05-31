'use server';

import type { Country } from "@/interfaces/country.interface";

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,area,region');

  if (!response.ok) return [];

  return response.json();
};