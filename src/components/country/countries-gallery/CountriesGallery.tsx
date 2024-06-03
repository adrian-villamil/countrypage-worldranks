import { getNeighboringCountries } from "@/actions";

interface Props {
  borders: string[] | undefined;
}

export const CountriesGallery = async ({ borders }: Props) => {
  const neighboringCountries = await getNeighboringCountries(borders);

  return (
    <div>
      {neighboringCountries.map((country) => (
        <span key={country.name.official}>{country.name.common}</span>
      ))}
    </div>
  )
}
