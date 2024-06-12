import { getAllCountries } from "@/actions";
import type { SearchParams } from "@/interfaces";
import { Aside, Header, Pagination, Table } from "@/components";

interface Props {
  searchParams: SearchParams;
}

export default async function HomePage({ searchParams }: Props) {
  const { count, totalPages, countries } = await getAllCountries(searchParams, 10);

  return (
    <main className="w-full lg:w-[980px] xl:w-[1205px] min-h-[600px] bg-dark-black shadow-xl border border-white/10 lg:rounded-xl mx-auto mt-60 mb-10 px-[30px] py-6">
      <Header count={count} />
      <div className="flex flex-col lg:flex-row gap-8">
        <Aside />
        <Table countries={countries} />
      </div>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
