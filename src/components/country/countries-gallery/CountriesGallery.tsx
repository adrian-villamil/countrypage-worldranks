import { getNeighboringCountries } from "@/actions";
import Image from "next/image";
import Link from "next/link";

interface Props {
  borders: string[] | undefined;
}

export const CountriesGallery = async ({ borders }: Props) => {
  const neighboringCountries = await getNeighboringCountries(borders);

  return (
    <div className="flex flex-wrap gap-4">
      {neighboringCountries.map((country) => (
        <Link key={country.cca3} href={`/country/${country.cca3}`} className="flex flex-col gap-2">
          <Image
            src={country.flags.png}
            alt={country.name.common}
            width={320}
            height={160}
            priority
            className="w-20 h-[60px] rounded object-cover"
          />
          <span className="text-white text-xs">{country.name.common}</span>
        </Link>
      ))}
    </div>
  )
}
