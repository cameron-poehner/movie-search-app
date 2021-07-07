import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PersonCard from './PersonCard'

export default function PeopleResults({ results, query, data }) {
    const classes = useStyles();

    const people = results.filter(item => item.media_type === 'person');


    return(
        <section className={classes.root}>
        <h3 className={classes.title}>People</h3>
        <div className={classes.slider}>
        {people.map(person => 
          <PersonCard key={person.id} person={person} query={query} data={data} />)}     
        </div>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: '1rem',
        marginRight: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        width: '70vw',
        boxSizing: 'border-box',
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