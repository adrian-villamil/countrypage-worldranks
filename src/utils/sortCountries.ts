import { Country } from "@/interfaces/country.interface";
import { SorterQuery } from "@/interfaces/filters.interface";

export const sortCountries = (countries: Country[], sortBy: SorterQuery) => {
  if (sortBy === 'name') {
    return countries.toSorted((a, b) => {
      if (a.name.common < b.name.common) return -1;
      if (a.name.common > b.name.common) return 1;
      return 0;
    });
  }

  if (sortBy === 'area') {
    return countries.toSorted((a, b) => {
      if (a.area < b.area) return 1;
      if (a.area > b.area) return -1;
      return 0;
    });
  }

  if (sortBy === 'population') {
    return countries.toSorted((a, b) => {
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    });
  }
  
  return countries.toSorted((a, b) => {
    if (a.population < b.population) return 1;
    if (a.population > b.population) return -1;
    return 0;
  });
};