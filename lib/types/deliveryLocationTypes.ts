import { Country } from "country-list";
import { Dispatch, SetStateAction } from "react";

export interface DeliveryLocation {
  setShowCountries: Dispatch<SetStateAction<boolean>>;
  showCountries: boolean;
  country: Country;
  setCountry: Dispatch<SetStateAction<Country>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}
