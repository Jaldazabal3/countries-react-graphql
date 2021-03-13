import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { CountrySummaryModel } from './CountrySummaryModel';

interface CountrySummaryProps {
  country: CountrySummaryModel;
}

const CountrySummaryComponent = ({ country }: CountrySummaryProps) => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={country.name}
      />
      <CardContent>
        <ul>
          <li>
            Capital: {country.capital}
          </li>
          <li>
            Population: {country.population}
          </li>
        </ul>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          disableElevation
          color="default"
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  )
}

export default CountrySummaryComponent;
