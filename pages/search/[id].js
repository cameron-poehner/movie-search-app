import MoviesList from '../../components/MoviesList'
import { useSelector, useDispatch } from 'react-redux';
import {  moviesResults } from '../../store/moviesSlice'
import { connect } from 'react-redux'
import { selectResults } from '../../components/Navbar'
import { Title } from '@material-ui/icons';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'

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
    console.log(query)
    const { Search } = data;
    console.log(Search);
    return (
       
        <div className={classes.root}>
          <Head>
            <title>IMDb | Search</title>
          </Head>
            <h2 className={classes.Title}>Results for '{query.id}'</h2>
          
            <MoviesList Search={Search} query={query} />
        </div>
    )
}

