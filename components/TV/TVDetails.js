import { makeStyles } from '@material-ui/core/styles'
import { genreList } from '../../lib/helper'

export default function TVDetails({ data }) {
    const classes = useStyles();

    const { overview, tagline, genres } = data;

    return(
        <section className={classes.sectionContainer}>
        <div className={classes.deetsContainer}>
        <h2 className={classes.deets}>StoryLine</h2>
        <p className={classes.plot}>{overview}</p>
        <div><strong>Tagline: </strong>{tagline}</div>
        <div><strong>Genres: </strong>{genreList(genres)}</div>
        </div>
    </section>
    )
}

const useStyles = makeStyles((theme) => ({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        paddingBottom: '4rem'
    },
    deetsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        width: '70%',
        gridGap: '2rem',
        fontFamily: 'Roboto',
        letterSpacing: '2px',
    },
    deets: {
        padding: '1rem',
        paddingLeft: '0',
        fontFamily: 'Roboto',
        fontSize: '2.5rem',
        fontWeight: '200',
        letterSpacing: '2px',
    },
    plot: {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        letterSpacing: '2px'
    },
}))