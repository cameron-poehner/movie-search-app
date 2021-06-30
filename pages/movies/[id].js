import SingleMovie from '../../components/SingleMovie'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'

export async function getServerSideProps({ id }) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=50ee20a8e3da5025fd2012e0cc6f35ad&language=en-US&append_to_response=details,credits`;
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function SingleMoviePage({ data, query }) {
    const classes = useStyles();

    console.log('Single Move Query', query);
    console.log('Single Movie data', data);

    return (
        <div className={classes.root}>
        <Head>
            <title>IMDb | {data.Title}</title>
        </Head>
              <SingleMovie data={data} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        height: 'auto',
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
    },
}))