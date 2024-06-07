import { Country, Region } from "@/interfaces/country.interface";
import { RegionQuery } from "@/interfaces/filters.interface";

export const filterCountriesByRegions = (countries: Country[], regions: RegionQuery[]) => {
  return countries.filter((country) => regions.includes(country.region.toLowerCase() as RegionQuery));
};