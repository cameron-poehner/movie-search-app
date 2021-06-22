import MoviesList from '../../components/MoviesList'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import Breadcrumb from  '../../components/Breadcrumbs'

export async function getServerSideProps({ query }) {
    const { id } = query;
    console.log(query);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=50ee20a8e3da5025fd2012e0cc6f35ad&language=en-US&query=${id}&page=1&include_adult=false`
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
    const { results } = data;

    function truncate(string) {
        let replace = string.slice(0, 25).concat('...');
        return string.length <= 20 ? string : replace;
      }

    console.log(data)
    return (
       
        <div className={classes.root}>
          <Head>
            <title>IMDb | Search</title>
          </Head>
            <Breadcrumb query={query} />
            <h2 className={classes.Title}>Results for '{truncate(id)}'</h2>
            <MoviesList results={results} data={data} query={query} />
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
        height: 'auto',
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: '2rem',
        textTransform: 'uppercase'
    },
}))