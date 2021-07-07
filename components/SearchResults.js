import { makeStyles } from '@material-ui/core/styles';
import TitlesCard from './TitlesCard';
import { Paper } from '@material-ui/core';
import PersonCard from './PersonCard'
import { truncate } from '../lib/helper'
import TitleResults from './TitleResults'
import PeopleResults from './PeopleResults'

export default function SearchResults({ query, data }) {
    const classes = useStyles();
    const { results } = data;
    console.log('search results', results)

    
    const people = results.filter(item => item.media_type === 'person');
    const titles = results.filter(item => item.media_type ==='tv' || item.media_type === 'movie');


    return (
        <div>
        {titles.length > 0 ? 
        <TitleResults results={results} query={query} data={data} />
        : null}
        {people.length > 0 ? <PeopleResults results={results} query={query} data={data} />
        : null}
       
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