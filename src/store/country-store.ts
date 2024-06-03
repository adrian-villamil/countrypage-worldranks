import { getAllCountries } from "@/actions";
import { Country, Region } from "@/interfaces/country.interface";
import { create } from "zustand";

interface State {
  countries: Country[];
  setAllCountries: () => void;
}

export const useCountryStore = create<State>()((set, get) => ({
  countries: [],
  setAllCountries: async () => {
    const countries = await getAllCountries();
    set((state) => ({ ...state, countries: countries.sort((a, b) => b.population - a.population) }));
  },
}));