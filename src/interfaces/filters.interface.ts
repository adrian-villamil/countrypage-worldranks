import { Country } from "./country.interface";

export interface CountriesResponse {
  count: number;
  totalPages: number;
  countries: Country[];
}

export interface SearchParams {
  sort_by?: SorterQuery;
  region?: RegionQuery | RegionQuery[];
  is_un_member?: string;
  is_independent?: string;
  search?: string;
  page?: string;
}

export type SorterQuery = 'name' | 'population' | 'area';

export type RegionQuery = "europe" | "americas" | "africa" | "oceania" | "asia" | "antarctic";