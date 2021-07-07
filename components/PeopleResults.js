import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PersonCard from './PersonCard'

export default function PeopleResults({ results, query, data }) {
    const classes = useStyles();

    const people = results.filter(item => item.media_type === 'person');


    return(
        <div>
        <h3>People</h3>
        <Paper elevation={3} className={classes.root}>
            
        {people.map(person => 
                   <PersonCard key={person.id} person={person} query={query} data={data} />)}     
        
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
  
}))