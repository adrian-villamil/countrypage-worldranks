'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  count: number;
}

export const Header = ({ count }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center pb-9">
      <h1 className="text-gray">
        {`Found ${count} ${count === 1 ? 'country' : 'countries'}`}
      </h1>
      <input
        type="text"
        defaultValue={searchParams.get('search')?.toString()}
        placeholder="Search by Name, Region, Subregion"
        className="w-full sm:w-[340px] p-3 pl-11 rounded-xl text-white placeholder:text-gray bg-light-black bg-no-repeat text-sm"
        style={{
          backgroundImage: 'url("/Search.svg")',
          backgroundPosition: '8px'
        }}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};
