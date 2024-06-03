'use server';

import type { Country } from "@/interfaces/country.interface";

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await fetch('http://localhost:3000/api/country');

  if (!response.ok) return [];

  return response.json();
};