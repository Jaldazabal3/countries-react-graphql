import {
  Country
} from './components/Country/CountryModel';
export interface HomeModel {
  searchValue: string;
  countriesResult: Country[];
}