'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { parseStringToBoolean } from "@/utils";

const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

export const Aside = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('sort_by', value);
    } else {
      params.delete('sort_by');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleButtonChange = (region: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.has('region', region)) {
      params.delete('region', region);
    } else {
      params.append('region', region);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, checked.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full lg:w-64 xl:w-80 flex flex-col gap-8">
      {/* SORT BY */}
      <div className="flex flex-col gap-2">
        <h6 className="text-gray text-xs">Sort by</h6>
        <select
          name="sort-list"
          id="sort-list"
          defaultValue={searchParams.get('sort_by') ?? 'population'}
          onChange={handleSelectChange}
          className="px-[14px] py-[9px] pr-5 bg-dark-black border-2 border-gray/15 rounded-xl text-white text-sm appearance-none bg-[url('/Expand_down.svg')] bg-no-repeat bg-[calc(100%-14px)]"
        >
          <option value="name">Name</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </div>

      {/* REGIONS */}
      <div className="flex flex-col gap-3">
        <h6 className="text-gray text-xs">Region</h6>
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <Button
              key={region}
              isActive={searchParams.has('region', region.toLowerCase())}
              onClick={() => handleButtonChange(region.toLowerCase())}
            >
              {region}
            </Button>
          ))}
        </div>
      </div>

      {/* STATUS */}
      <div className="flex flex-col gap-3">
        <h6 className="text-gray text-xs">Status</h6>
        <div className="flex flex-col items-start gap-3">
          <Checkbox
            name="is_united_nation"
            label="Member of the United Nations"
            checked={parseStringToBoolean(searchParams.get('is_united_nation') ?? 'false')}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            name="is_independent"
            label="Independent"
            checked={parseStringToBoolean(searchParams.get('is_independent') ?? 'false')}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </div>
  );
};
