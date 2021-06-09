import MoviesList from '../../components/MoviesList'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Breadcrumb from  '../../components/Breadcrumbs'


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        margin: '0',
        padding: '0',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 'auto',
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: '2rem',
        textTransform: 'uppercase'
    },
}))


export async function getServerSideProps({ query }) {
    const { id } = query;
    console.log(query);
    const url = `http://www.omdbapi.com/?s=${id}&apikey=65137754`
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
    const { Search } = data;
    return (
       
        <div className={classes.root}>
          <Head>
            <title>IMDb | Search</title>
          </Head>
            <Breadcrumb query={query} />
            <h2 className={classes.Title}>Results for '{id}'</h2>
            <MoviesList Search={Search} data={data} query={query} />
        </div>
    )
}

