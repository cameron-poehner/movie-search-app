import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TitlesCard from './TitlesCard'

export default function TitleResults({ query, data }) {
    const classes = useStyles();

    const { results } = data;
    const titles = results.filter(item => item.media_type ==='tv' || item.media_type === 'movie');

    return(
        <section>
        <h2>Titles</h2>
        <Paper elevation={3} className={classes.root}>
        
        {titles.map(movie => {
                  return (
                   <TitlesCard key={movie.id} movie={movie} query={query} data={data} />
                )})}        
        </Paper>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        display: 'grid',
        gridGap: '2rem',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        width: '70vw',
        listStyle: 'none',
        height: 'auto',
        margin: '5rem',
        padding: '2rem',
        background: 'black',
        boxSizing: 'border-box',
    },
}))