import { getAllCountries } from "@/actions";
import { Aside, Header, Table } from "@/components";
import type { SearchParams } from "@/interfaces";

interface Props {
  searchParams: SearchParams;
}

export default async function HomePage({ searchParams }: Props) {
  const { count, countries } = await getAllCountries(searchParams);

  return (
    <main className="w-full lg:w-[984px] xl:w-[1200px] min-h-[600px] bg-dark-black shadow-xl border border-white/10 lg:rounded-xl mx-auto mt-60 px-[30px] pt-6">
      <Header count={count} />
      <div className="flex flex-col lg:flex-row gap-8">
        <Aside />
        <Table countries={countries} />
      </div>
    </main>
  );
}
