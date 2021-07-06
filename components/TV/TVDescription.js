import { makeStyles } from '@material-ui/core/styles';
import { starsList } from '../../lib/helper'

export default function TVDescription({ data }) {
    const classes = useStyles();

    const { poster_path, tagline, created_by, credits } = data;
    const { cast } = credits;

    const stars = cast.slice(0, 3);

    return (
        <div className={classes.container}>
                <img
                  className={classes.Poster}
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
                  alt=""
                />
                <div className={classes.descContainer}>
                    <p className={classes.tagling}>
                        <span>Tagline: </span>
                        {tagline}
                    </p>
                    <p className={classes.creators}>
                        <span className={classes.span}>{created_by.length === 1 ? 'Creator' : 'Creators'}:</span>
                        {starsList(created_by)}
                    </p>
                    <p className={classes.creators}>
                        <span className={classes.span}>Stars:</span>
                        {starsList(stars)}
                    </p>
                </div>
            </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        width: '70vw',
        boxSizing: 'content-box',
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
    },
}))