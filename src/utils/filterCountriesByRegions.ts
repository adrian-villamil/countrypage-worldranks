import { Country, RegionQuery } from "@/interfaces";

export const filterCountriesByRegions = (countries: Country[], regions: RegionQuery | RegionQuery[]) => {
  if (Array.isArray(regions)) {
    return countries.filter((country) => regions.includes(country.region.toLowerCase() as RegionQuery));
  }

  return countries.filter((country) => country.region.toLowerCase() === regions);
};