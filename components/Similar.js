import { makeStyles } from '@material-ui/core/styles'
import TitlesCard from './TitlesCard'

export default function Similar({ similar }) {
    const classes = useStyles();

    const { results } = similar;

    return(
        <div>
        <h2 className={classes.similarHeading}>More Like This</h2>
            <section className={classes.similar}>
                {results.map(movie => <TitlesCard key={movie.id} movie={movie} />)}
            </section>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    similarHeading: {
        padding: '1rem',
        fontFamily: 'Roboto',
        fontSize: '2.5rem',
        fontWeight: '200',
        letterSpacing: '2px'
    },
    similar: {
        width: 'auto',
        overflowX: 'scroll',
        display: 'flex',
        justifyContent: 'start',
        flexWrap:'no-wrap',
        boxSizing: 'border-box',
        margin: '1rem',
        marginTop: '0',
        paddingTop: '0',
        padding: '1rem',
    },
}))