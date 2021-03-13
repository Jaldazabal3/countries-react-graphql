import {
  CountrySummaryModel
} from './components/CountrySummary/CountrySummaryModel';
export interface HomeModel {
  searchValue: string;
  countriesResult: CountrySummaryModel[];
}