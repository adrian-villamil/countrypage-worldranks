import { Country } from "./country.interface";

export interface CountriesResponse {
  count: number;
  countries: Country[];
}

export interface SearchParams {
  sort_by?: SorterQuery;
  region?: RegionQuery | RegionQuery[];
  is_united_nation?: string;
  is_independent?: string;
  search?: string;
}

export type SorterQuery = 'name' | 'population' | 'area';

export type RegionQuery = "europe" | "americas" | "africa" | "oceania" | "asia" | "antarctic";