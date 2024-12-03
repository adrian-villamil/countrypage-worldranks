import Image from "next/image";
import { Suspense } from "react";
import { getCountryByCode } from "@/actions";
import { formatNumber } from "@/utils";
import { CountriesGallery, CountriesGallerySkeleton } from "@/components";

export const revalidate = 15552000;

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const countries = await fetch('https://restcountries.com/v3.1/all?fields=cca3');

  return countries.json();
};

interface Props {
  params: { cca3: string };
}

export default async function CountryPage({ params }: Props) {
  const { cca3 } = params;
  const country = await getCountryByCode(cca3);

  if (!country) return <p>Not found</p>;

  return (
    <main className="w-full lg:w-[720px] min-h-[840px] flex flex-col gap-10 relative bg-dark-black shadow-xl border border-white/10 lg:rounded-xl mx-auto mt-60 mb-20">
      <Image
        src={country.flags.png}
        alt={country.flags.alt ?? 'No flag'}
        width={320}
        height={160}
        priority
        className="w-[260px] h-[196px] rounded-xl object-cover absolute -top-[49px] left-1/2 -translate-x-1/2"
      />
      <div className="mt-44">
        <h1 className="text-white text-center text-[32px]">{country.name.common}</h1>
        <h3 className="text-white text-center">{country.name.official}</h3>
      </div>
      <div className="flex flex-col px-5 sm:flex-row sm:px-0 justify-center gap-10">
        <div className="py-2 rounded-xl bg-light-black">
          <div className="flex divide-x divide-black/40 overflow-hidden">
            <span className="text-white text-sm text-center px-5 py-2 flex-1 sm:flex-none">Population</span>
            <span className="text-white text-sm text-center px-5 py-2 flex-1 sm:flex-none">{formatNumber(country.population)}</span>
          </div>
        </div>
        <div className="py-2 rounded-xl bg-light-black">
          <div className="flex divide-x divide-black/40 overflow-hidden">
            <span className="text-white text-sm text-center px-5 py-2 flex-1 sm:flex-none">Area (km²)</span>
            <span className="text-white text-sm text-center px-5 py-2 flex-1 sm:flex-none">{formatNumber(country.area)}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 divide-y divide-white/10">
        <div className="flex justify-between px-5 py-6">
          <span className="text-gray text-sm">Capital</span>
          <span className="text-white text-sm">{country.capital ? country.capital[0] : 'No capital'}</span>
        </div>
        <div className="flex justify-between px-5 py-6">
          <span className="text-gray text-sm">Subregion</span>
          <span className="text-white text-sm">{country.subregion ?? 'No subregion'}</span>
        </div>
        <div className="flex justify-between px-5 py-6">
          <span className="text-gray text-sm">Language</span>
          <span className="text-white text-sm">{Object.values(country.languages ?? { lan: 'No languages' }).join(', ')}</span>
        </div>
        <div className="flex justify-between px-5 py-6">
          <span className="text-gray text-sm">Currencies</span>
          <span className="text-white text-sm">{country.currencies ? Object.values(country.currencies).map((currency) => currency.name).join(', ') : 'No currencies'}</span>
        </div>
        <div className="flex justify-between px-5 py-6">
          <span className="text-gray text-sm">Continents</span>
          <span className="text-white text-sm">{country.continents.join(',')}</span>
        </div>
        <div className="flex flex-col gap-6 px-5 py-6">
          <span className="text-gray text-sm">Neighbouring Countries</span>
          <Suspense fallback={<CountriesGallerySkeleton />}>
            <CountriesGallery borders={country.borders} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}