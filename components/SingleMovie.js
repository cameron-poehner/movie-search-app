import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MovieHeading from './MovieHeading';
import { commaList } from '../lib/helper';

export default function SingleMovie({ data }) {
    const classes = useStyles();
    const { poster_path, title, tagline, credits } = data;
    const { crew, cast } = credits;

    const director = crew.filter(member => member.job === "Director");
    
    console.log('Director', director);

    const writer = crew.filter(member => member.job === "Screenplay" 
    || member.job === "Writer" || member.job === "Co-Writer");

    console.log('writer', writer)

    const shortCast = cast.slice(0, 5)
    return (
        <Paper elevation={3} className={classes.root}>
            <MovieHeading data={data} />
            <div className={classes.container}>
                <img 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
                  alt={title}
                  className={classes.Poster} />
                <div className={classes.descContainer}>
                <p className={classes.director}><span className={classes.span}>Tagline:</span>{tagline}</p>
                    <p className={classes.director}><span className={classes.span}>{director.length > 1 ? 'Directors' : 'Director'}:</span> {commaList(director)}</p>
                    <p className={classes.director}><span className={classes.span}>{writer.length > 1 ? 'Writers' : 'Writer'}:</span> {commaList(writer)}</p>
                    <p className={classes.director}><span className={classes.span}>Stars:</span> {commaList(shortCast)}</p>
                </div>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
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
    container: {
        height: 'auto',
        width: '70vw',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    director: {
        color: 'white',
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        fontWeight: '200'
    },
    span: {
        marginRight: '10px',
        letterSpacing: '2px',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
})) 
