import { makeStyles } from '@material-ui/core/styles';
import TitlesCard from './TitlesCard';
import { Paper } from '@material-ui/core';
import PersonCard from './PersonCard'

export default function SearchResults({ results, query, data }) {
    const classes = useStyles();

    console.log('search results', results)

    const titles = results.filter(item => item.media_type ==='tv' || item.media_type === 'movie');
    const people = results.filter(item => item.media_type === 'person');

    console.log('people filter', people);
    console.log('title filter', titles);

    return (
        <div>
        <h2>Titles</h2>
        <Paper elevation={3} className={classes.root}>
            
        {titles.map(movie => {
                  return (
                   <TitlesCard key={movie.id} movie={movie} query={query} data={data} />
                )})}        
        </Paper>
        <h3>People</h3>
        <Paper elevation={3} className={classes.root}>
            
        {people.map(person => {
                  return (
                   <PersonCard key={person.id} person={person} query={query} data={data} />
                )})}        
        </Paper>
        </div>
    
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
  
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10vw',
        height: '35vh',
        margin: '1rem',
        background: '#1c1c1c',
    },
    poster: {
        height: '200px',
        width: '150px',
        borderRadius: '5px'
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: '1rem',
        color: 'white',
        '&:hover': {
            color: 'blue',

        }
    },
    Year: {
        fontFamily: 'Roboto',
        textAlign: 'right',
    },

}))