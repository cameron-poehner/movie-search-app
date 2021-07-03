import { makeStyles } from '@material-ui/core/styles';
import TVHeading from './TVHeading';
import { starsList } from '../lib/helper'

export default function TVShow ({ query, data }) {
    const classes = useStyles();

    console.log('tv show', query);
    console.log('tv show data', data);

    const { poster_path, created_by } = data;

    return (
        <div className={classes.root}>
            <TVHeading data={data} query={query} />
            <div className={classes.container}>
                <img
                  className={classes.Poster}
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
                  alt=""
                />
                <div className={classes.descContainer}>
                    <p className={classes.creators}>
                        <span className={classes.span}>{created_by.length === 1 ? 'Creator' : 'Creators'}:</span>
                        {starsList(created_by)}
                    </p>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        
        color: 'white',
        height: 'auto',
        margin: '2rem',
        width: '70vw'
    },
    container: {
        width: '70vw',
        boxSizing: 'border-box',
        fontFamily: 'Roboto',
        letterSpacing: '1px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        background: 'black',
        height: '100%',
    },
    descContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '70%',
        padding: '4rem'
    },
    Poster: {
        boxSizing: 'border-box',
        height: '100%',
        width: '260px'
    },
    span: {
        marginRight: '1rem'
    }
}))