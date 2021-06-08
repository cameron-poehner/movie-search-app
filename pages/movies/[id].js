import MovieCard from '../../components/MovieCard'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: '#272C34',
    },
    Poster: {
        width: '100vw',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `http://www.omdbapi.com/?t=${id}&apikey=65137754`
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function SingleMoviePage({ data }) {
    const classes = useStyles();
    console.log(data)
    
    return (
        <div className={classes.root}>
        <Head>
            <title>IMDb | {data.Title}</title>
        </Head>
              <MovieCard data={data} />
        </div>
    )
}