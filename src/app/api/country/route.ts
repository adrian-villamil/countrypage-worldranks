import type { SorterQuery, RegionQuery, Name, Region, CountriesResponse } from '@/interfaces';
import { seedCountries } from '@/seed/seed-contries';
import { parseStringToBoolean, filterCountriesByRegions, sortCountries } from '@/utils';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sortBy = searchParams.get('sort_by') as SorterQuery | null;
  const regions = searchParams.getAll('region') as RegionQuery[];
  const isUnitedNation = parseStringToBoolean(searchParams.get('is_united_nation') ?? 'false');
  const isIndependent = parseStringToBoolean(searchParams.get('is_independent') ?? 'false');
  const search = searchParams.get('search');
  const take = 12;
  let page = parseInt(searchParams.get('page') ?? '1');

  if (isNaN(page)) page = 1;
  if (page < 1) page = 1;

  let filteredRegions = [];
  let unMembers = [];
  let independents = [];
  let sorted = [];
  let searched = [];

  if (regions.length > 0) {
    filteredRegions = filterCountriesByRegions(seedCountries, regions);
  } else {
    filteredRegions = [...seedCountries];
  }

  if (isUnitedNation) {
    unMembers = filteredRegions.filter((country) => country.unMember);
  } else {
    unMembers = [...filteredRegions];
  }

  if (isIndependent) {
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
      country.name.common.toLowerCase().includes(search) ||
      country.region.toLowerCase().includes(search) ||
      country.subregion?.toLowerCase().includes(search)
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

  return NextResponse.json(countriesResponse, { status: 200 });
}