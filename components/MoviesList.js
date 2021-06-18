
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';
import ErrorMessage from './ErrorMessage';
import MovieCard from './MovieCard'


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
        padding: '0',
        color: 'white',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '70vw',
        textAlign: 'left',
        listStyle: 'none',
        height: 'auto',
        margin: '4rem'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '10vw',
        height: '35vh',
        margin: '1rem',
        background: '#1c1c1c'
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

export default function MoviesList({ data, results }) {
    const classes = useStyles();
    const { Error } = data;
    console.log('data', results)
    // if (!(!Error)) return <ErrorMessage Error={Error} data={data} />;
    return (

        <div elevation={3} className={classes.root}>
        {results.map(movie => {
                  return (
                   <MovieCard movie={movie} />
                )})}        
            </div>

    
    )
}


