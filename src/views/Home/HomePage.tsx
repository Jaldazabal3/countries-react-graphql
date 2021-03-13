import { Button, Container, Grid, TextField } from '@material-ui/core';
import { useState } from 'react'
import CountrySummaryComponent from './components/CountrySummary/CountrySummaryComponent';
import {
  HomeModel
} from './HomeModel';

import './HomePage.scss';

const HomePage = () => {
  const [countryData, setCountryData] = useState<HomeModel>({
    countriesResult: [],
    searchValue: ''
  });

  const countriesOrEmpty = () => {
    if (countryData.countriesResult && countryData.countriesResult.length > 0) {
      return (
        <Grid container spacing={4}>
          {countryData.countriesResult.map(country => {
            return (<Grid item xs={12} md={6} key={country.id}>
              <CountrySummaryComponent country={country} />
            </Grid>)
          })}
        </Grid>
      );
    } else {
      return (
        <Container style={{marginTop: '50px'}}>
          <img src="https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg" alt="World Map"/>
        </Container>
      )
    }
  }

  const handleSearchChange = (event: any) => {
    setCountryData(state => ({
      ...state,
      searchValue: event.target.value
    }));
  }

  const searchCoutries = () => {
    setCountryData(state => ({
      ...state,
      countriesResult: [
        {
          capital: 'Montreal',
          id: '1',
          name: 'Canada',
          population: 500000,
          populationDensity: 300.5
        },
        {
          capital: 'Stockholm',
          id: '2',
          name: 'Sweden',
          population: 2000000,
          populationDensity: 200.5
        }
      ]
    }));
  }

  return (
    <Container>
      <h1>
        Countries App
      </h1>
      <Grid container spacing={4}>
        <Grid item md={9}>
          <TextField
            label="Search a country"
            variant="outlined"
            fullWidth
            value={countryData.searchValue}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item md={3}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            fullWidth
            style={{height: '56px'}}
            onClick={searchCoutries}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {
        countriesOrEmpty()
      }
    </Container>
  );
}

export default HomePage;