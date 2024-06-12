'use server';

import type { Country } from "@/interfaces";

export const getNeighboringCountries = async (borders: string[] = []): Promise<Country[]> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}`);

  if (!response.ok) return [];

  return response.json();
};