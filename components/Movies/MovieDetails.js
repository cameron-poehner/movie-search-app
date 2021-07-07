import { makeStyles } from '@material-ui/core/styles';
import { genreList, starsList } from '../../lib/helper';

export default function MovieDetails({ data }) {
    const classes = useStyles();

    const { overview, genres, budget, revenue } = data;

    return (
        <section className={classes.movieDetails}>
        <div className={classes.root}>
            <h2 className={classes.heading}>Storyline</h2>
            <p className={classes.plot}>{overview}</p>
            <p className={classes.detail}><span className={classes.desc}>Genres: </span>{genreList(genres)}</p>
            <p className={classes.detail}><span className={classes.desc}>Budget: </span>
              {new Intl.NumberFormat('en-US',
              { style: 'currency', currency: 'USD'} ).format(budget)}</p>
            <p className={classes.detail}><span className={classes.desc}>Revenue:</span> {new Intl.NumberFormat('en-US', 
              { style: 'currency', currency: 'USD'}).format(revenue)}</p>
        </div>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        alignItems: 'start',
        padding: '2rem 0'
    },
    heading: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: '400',
        letterSpacing: '4px',
        overflowWrap: 'break-word',
        color: 'white',
        marginRight: '1rem'
    },
    plot: {
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        lineHeight: '1.5rem'
    },
    detail: {
        color: 'white',
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        fontWeight: '200',
    },
    desc: {
        marginRight: '10px',
        letterSpacing: '2px',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    details: {
        background: '#1c1c1c',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
        padding: '2rem 0'
    },
    movieDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
}))