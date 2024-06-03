'use client';

import { useState } from "react";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";

const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

export const Aside = () => {
  const [sortBy, setSortBy] = useState('population');
  const [filterByRegions, setFilterByRegions] = useState<string[]>([]);
  const [filterByStatus, setFilterByStatus] = useState({
    unitedNation: false,
    independent: true,
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleRegionsChange = (region: string) => {
    if (filterByRegions.includes(region)) {
      const updatedRegions = filterByRegions.filter((reg) => reg !== region);
      setFilterByRegions(updatedRegions);
    } else {
      const updatedRegions = [...filterByRegions, region];
      setFilterByRegions(updatedRegions);
    }
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilterByStatus((filterByStatus) => ({ ...filterByStatus, [name]: checked }));
  };

  return (
    <div className="w-full lg:w-64 xl:w-80 flex flex-col gap-8">
      {/* SORT BY */}
      <div className="flex flex-col gap-2">
        <h6 className="text-gray text-xs">Sort by</h6>
        <select
          name="sort-list"
          id="sort-list"
          value={sortBy}
          onChange={handleSelectChange}
          className="px-[14px] py-[9px] pr-5 bg-dark-black border-2 border-gray/15 rounded-xl text-white text-sm appearance-none bg-[url('/Expand_down.svg')] bg-no-repeat bg-[calc(100%-14px)]"
        >
          <option value="name" className="p-5">Name</option>
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
              isActive={filterByRegions.includes(region)}
              onClick={() => handleRegionsChange(region)}
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
            name="unitedNation"
            label="Member of the United Nations"
            checked={filterByStatus.unitedNation}
            onChange={handleStatusChange}
          />
          <Checkbox
            name="independent"
            label="Independent"
            checked={filterByStatus.independent}
            onChange={handleStatusChange}
          />
        </div>
      </div>
    </div>
  );
};
