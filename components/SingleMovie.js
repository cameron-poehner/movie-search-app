import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MovieHeading from './MovieHeading';
import { genreList, starsList } from '../lib/helper';
import CastMember from './CastMember';
import MovieDetails from './MovieDetails';

export default function SingleMovie({ data }) {
    const classes = useStyles();
    const { poster_path, title, tagline, credits } = data;
    const { crew, cast } = credits;

    const director = crew.filter(member => member.job === "Director");

    const writer = crew.filter(member => member.job === "Screenplay" 
    || member.job === "Writer" || member.job === "Co-Writer");

    const shortCast = cast.slice(0, 5);

    return (
        <Paper elevation={3} className={classes.root}>
            <MovieHeading data={data} />
            <div className={classes.container}>
                <img 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
                  alt={title}
                  className={classes.Poster} />
                <div className={classes.descContainer}>
                <p className={classes.director}>
                    <span className={classes.span}>Tagline:</span>{tagline}
                </p>
                <p className={classes.director}>
                    <span className={classes.span}>{director.length > 1 ? 'Directors' : 'Director'}:</span> 
                    {starsList(director)}
                </p>
                <p className={classes.director}>
                    <span className={classes.span}>{writer.length > 1 ? 'Writers' : 'Writer'}:</span> 
                    {starsList(writer)}
                </p>
                <p className={classes.director}>
                    <span className={classes.span}>Stars:</span> 
                    {starsList(shortCast)}
                </p>
                </div>
            </div>
            <section className={classes.details}>
                <h2 className={classes.cast}>Cast</h2>
            {cast.map(member => <CastMember member={member} />)}
            </section>
            <section className={classes.movieDetails}>
                <MovieDetails data={data} />
            </section>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5rem 0',
        padding: '0',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '70vw',
        height: 'auto',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
  
    Poster: {
       boxSizing: 'border-box',
       height: '100%',
       width: '260px'
   },
    descContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        height: '100%',
        justifyContent: 'start',
        alignItems: 'flex-start',
        padding: '4rem',
        boxSizing: 'border-box',
        color: 'white',
        fontFamily: 'Roboto',
        letterSpacing: '1px',

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
    cast: {
        textAlign: 'left',
    },
    director: {
        color: 'white',
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        fontWeight: '200',

    },
    span: {
        marginRight: '10px',
        letterSpacing: '2px',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    movieDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
})) 
