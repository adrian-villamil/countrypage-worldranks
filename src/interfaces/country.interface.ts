export interface Country {
  flags:      Flags;
  name:       Name;
  region:     Region;
  area:       number;
  population: number;
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

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}
