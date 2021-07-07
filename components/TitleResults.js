import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TitlesCard from './TitlesCard'

export default function TitleResults({ query, data }) {
    const classes = useStyles();

    const { results } = data;
    const titles = results.filter(item => item.media_type ==='tv' || item.media_type === 'movie');

    return(
        <section className={classes.root}>
        <h2 className={classes.title}>Titles</h2>
        <div className={classes.slider}>
        
        {titles.map(movie => {
                  return (
                   <TitlesCard key={movie.id} movie={movie} query={query} data={data} />
                )})}        
        </div>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginRight: '1rem',
        marginLeft: '1rem'
    },
    slider: {
        color: 'white',
        width: '70vw',
        height: 'auto',
        background: 'transparent',
        boxSizing: 'border-box',
        display: 'flex',
        overflowX: 'scroll',
        
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        letterSpacing: '2px'
    }
}))