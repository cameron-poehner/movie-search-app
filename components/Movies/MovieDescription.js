import { makeStyles } from '@material-ui/core/styles'
import { starsList } from '../../lib/helper'

export default function MovieDescription({ data }) {
    const classes = useStyles();

    const { poster_path, tagline, credits, title } = data;
    const { cast, crew } = credits;

    const director = crew.filter(member => member.job === "Director");

    const writer = crew.filter(member => member.job === "Screenplay" 
    || member.job === "Writer" || member.job === "Co-Writer");

    const shortCast = cast.slice(0, 5);

    return(
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
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        boxSizing: 'content-box',
        fontFamily: 'Roboto',
        letterSpacing: '1px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        background: 'black',
        height: '100%',
        width: '100%',
        margin: '0',
        padding: '0',
    },
    span: {
        marginRight: '10px',
        letterSpacing: '2px',
        fontFamily: 'Roboto',
        fontWeight: '400',
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
    Poster: {
        boxSizing: 'border-box',
        height: '100%',
        width: '260px'
    },
     descContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '70%',
        padding: '4rem'
 
     },
  
}))