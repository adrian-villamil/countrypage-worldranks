export interface Country {
  flags:        Flags;
  name:         Name;
  cca3:         string;
  independent?: boolean;
  unMember:     boolean;
  currencies:   { [key: string]: Currency };
  capital:      string[];
  region:       Region;
  subregion:    string;
  languages:    { [key: string]: string };
  borders:      string[];
  area:         number;
  population:   number;
  continents:   Continent[];
}

export type Continent = "Oceania" | "Europe" | "Africa" | "North America" | "South America" | "Asia" | "Antarctica";

export interface Currency {
  name:   string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common:   string;
}

export type Region = "Oceania" | "Europe" | "Africa" | "Americas" | "Asia" | "Antarctic";
