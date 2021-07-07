import SearchResults from '../../components/SearchResults'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import { truncate } from '../../lib/helper'

export async function getServerSideProps({ query }) {
    const { id } = query;
    console.log(query);
    const url = `https://api.themoviedb.org/3/search/multi?api_key=50ee20a8e3da5025fd2012e0cc6f35ad&language=en-US&query=${id}&page=1&include_adult=false`
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function MoviesListPage({ data, query }) {
    const classes = useStyles();
    const { id } = query;
   

    console.log('multi search query', query);
    console.log('multi search data', data);

    console.log(data)
    return (
       
        <div className={classes.root}>
          <Head>
            <title>IMDb | Search</title>
          </Head>
            <h2 className={classes.Title}>Results for '{truncate(id)}'</h2>
            <SearchResults data={data} query={query} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#272C34',
        margin: '0',
        padding: '0',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        height: 'auto',
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: '2rem',
        textTransform: 'uppercase'
    },
}))