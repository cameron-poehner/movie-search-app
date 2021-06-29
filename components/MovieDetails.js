import { makeStyles } from '@material-ui/core/styles';
import { commaList } from '../lib/helper';

export default function MovieDetails({ data }) {
    const { overview, genres, budget, revenue } = data;
    console.log('Movie Data', data);
    return (
        <div>
            <h2>Storyline</h2>
            <p>{overview}</p>
            <p>Genres: {commaList(genres)}</p>
            <p>Budget: 
              {new Intl.NumberFormat('en-US',
              { style: 'currency', currency: 'USD'} ).format(budget)}</p>
            <p>Revenue: {new Intl.NumberFormat('en-US', 
              { style: 'currency', currency: 'USD'}).format(revenue)}</p>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}))