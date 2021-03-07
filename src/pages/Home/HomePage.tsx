import { Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react'

import './HomePage.scss';

export default function HomePage() {
  const [countryResult, setCountryResult] = useState('');


  return (
    <Container>
      <h1>
        Countries App
      </h1>
      <Grid container spacing={4}>
        <Grid item md={9}>
          <TextField label="Search a country" variant="outlined" fullWidth/>
        </Grid>
        <Grid item md={3}>
          <Button variant="contained" disableElevation color="primary" fullWidth style={{height: '56px'}}>
            Search
          </Button>
        </Grid>
      </Grid>
      {
        !countryResult ?
          <Container style={{marginTop: '50px'}}>
            <img src="https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg" alt="World Map"/>
          </Container>
        :
          <p>Hola</p>
      }
    </Container>
  );
}
