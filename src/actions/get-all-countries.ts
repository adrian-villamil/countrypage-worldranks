'use server';

import type { CountriesResponse, Country, SearchParams } from "@/interfaces";

export const getAllCountries = async (searchParams: SearchParams): Promise<CountriesResponse> => {
  const baseUrl = 'http://localhost:3000/api/country';
  const sortBy = searchParams.sort_by;
  const region = searchParams.region;
  const isUnitedNation = searchParams.is_united_nation;
  const isIndependent = searchParams.is_independent;
  const search = searchParams.search;

  const querys: string[] = [];

  if (sortBy) {
    querys.push(`sort_by=${sortBy}`);
  }

  if (region) {
    if (Array.isArray(region)) {
      region.forEach((reg) => querys.push(`region=${reg}`));
    } else {
      querys.push(`region=${region}`);
    }
  }

  if (isUnitedNation) {
    querys.push(`is_united_nation=${isUnitedNation}`);
  }

  if (isIndependent) {
    querys.push(`is_independent=${isIndependent}`);
  }

  if (search) {
    querys.push(`search=${search}`);
  }

  const url = querys.length > 0 ? `${baseUrl}?${querys.join('&')}` : baseUrl;

  const response = await fetch(url);

  if (!response.ok) ({ count: 0, countries: [] });

  return response.json();
};