import Image from "next/image";
import Link from "next/link";
import type { Country } from "@/interfaces/country.interface";
import { formatNumber } from "@/utils/formatNumber";

interface Props {
  countries: Country[];
}

export const Table = ({ countries }: Props) => {
  return (
    <div className="overflow-x-auto w-full flex-1">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4 pr-3">Flag</th>
            <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4 pr-3">Name</th>
            <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4 pr-3">Population</th>
            <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4 pr-3">Area (km²)</th>
            <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4 hidden lg:table-cell">Region</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name.official}>
              <td className="py-3 pr-3">
                <Link href={`/country/${country.cca3}`}>
                  <Image
                    src={country.flags.png}
                    alt={country.flags.alt ?? country.name.common}
                    width={320}
                    height={233}
                    priority
                    className="max-w-[50px] h-10 rounded object-cover"
                  />
                </Link>
              </td>
              <td className="text-white text-left py-3 pr-3">{country.name.common}</td>
              <td className="text-white text-left py-3 pr-3">{formatNumber(country.population)}</td>
              <td className="text-white text-left py-3 pr-3">{formatNumber(country.area)}</td>
              <td className="text-white text-left py-3 hidden lg:table-cell">{country.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
