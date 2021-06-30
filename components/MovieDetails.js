import { makeStyles } from '@material-ui/core/styles';
import { genreList, starsList } from '../lib/helper';

export default function MovieDetails({ data }) {
    const { overview, genres, budget, revenue } = data;
    return (
        <div>
            <h2>Storyline</h2>
            <p>{overview}</p>
            <p>Genres: {genreList(genres)}</p>
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