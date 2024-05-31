import type { Country } from "@/interfaces/country.interface";
import Image from "next/image";

interface Props {
  countries: Country[];
}

export const Table = ({ countries }: Props) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4">Flag</th>
          <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4">Name</th>
          <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4">Population</th>
          <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4">Area (km²)</th>
          <th className="text-gray text-xs text-left font-medium border-b-2 border-gray/20 pb-4">Region</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr key={country.name.official}>
            <td className="py-3">
              <Image
                src={country.flags.png}
                alt={country.flags.alt ?? country.name.common}
                width={320}
                height={233}
                priority
                className="max-w-[50px] h-10 rounded"
              />
            </td>
            <td className="text-white text-left py-3">{country.name.common}</td>
            <td className="text-white text-left py-3">{country.population}</td>
            <td className="text-white text-left py-3">{country.area}</td>
            <td className="text-white text-left py-3">{country.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
