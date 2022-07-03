export interface Country {
  flags:        Flags;
  name:         Name;
  ccn3:         string;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  translations: { [key: string]: Translation };
  population:   number;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  spa: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}
