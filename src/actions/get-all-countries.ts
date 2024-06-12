'use server';

import type { CountriesResponse, Country, SearchParams } from "@/interfaces";
import { filterCountriesByRegions, parseStringToBoolean, sortCountries } from "@/utils";

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    return [];
  }

  return response.json();
};

export const getAllCountries = async (searchParams: SearchParams, take: number = 12): Promise<CountriesResponse> => {
  const sortBy = searchParams.sort_by;
  const regions = searchParams.region;
  const isUnMember = searchParams.is_un_member;
  const isIndependent = searchParams.is_independent;
  const search = searchParams.search;
  let page = parseInt(searchParams.page ?? '1');

  const countries = await fetchCountries();

  if (isNaN(page)) page = 1;
  if (page < 1) page = 1;

  let filteredRegions = [];
  let unMembers = [];
  let independents = [];
  let sorted = [];
  let searched = [];

  if (regions) {
    filteredRegions = filterCountriesByRegions(countries, regions);
  } else {
    filteredRegions = [...countries];
  }

  if (isUnMember && parseStringToBoolean(isUnMember)) {
    unMembers = filteredRegions.filter((country) => country.unMember);
  } else {
    unMembers = [...filteredRegions];
  }

  if (isIndependent && parseStringToBoolean(isIndependent)) {
    independents = unMembers.filter((country) => country.independent);
  } else {
    independents = [...unMembers];
  }

  if (sortBy) {
    sorted = sortCountries(independents, sortBy);
  } else {
    sorted = sortCountries(independents, 'population');
  }

  if (search) {
    searched = sorted.filter((country) => (
      country.name.common.toLowerCase().includes(search.toLowerCase()) ||
      country.region.toLowerCase().includes(search.toLowerCase()) ||
      country.subregion?.toLowerCase().includes(search.toLowerCase())
    ));
  } else {
    searched = [...sorted];
  }

  const count = searched.length;
  const totalPages = Math.ceil(count / take);
  const lastIndex = page * take;
  const firstIndex = lastIndex - take;
  const slicedCountries = searched.slice(firstIndex, lastIndex);

  const countriesResponse: CountriesResponse = {
    count: count,
    totalPages: totalPages,
    countries: slicedCountries,
  };

  return countriesResponse;
};