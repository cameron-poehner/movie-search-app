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
        <Paper elevation={3} className={classes.root}>
        {titles.length > 0 ? 
        <TitleResults results={results} query={query} data={data} />
        : null}
        {people.length > 0 ? <PeopleResults results={results} query={query} data={data} />
        : null}
       
        </Paper>
    
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        fontFamily: 'Roboto',
        background: '#1c1c1c',
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem',
        padding: '2rem',
        height: 'auto',
        boxSizing: 'border-box'
    },
}))