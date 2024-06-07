'use server';

import { Country } from "@/interfaces/country.interface";
import { getCountryByCode } from "./get-country-by-code";

export const getNeighboringCountries = async (borders: string[] | undefined): Promise<(Country | null)[]> => {
  if (!borders) return [];
  
  return await Promise.all(borders.map((border) => getCountryByCode(border)));
};