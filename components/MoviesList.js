import { useEffect, useState } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import MovieCard from './MovieCard'
import { Paper } from '@material-ui/core';

export default function MoviesList({ results }) {
    const classes = useStyles();
    console.log('data', results)
    const [sorted, setSorted] = useState([...results])
    console.log('sorted', sorted)

    // useEffect(() => {
    //     let sort = [...sorted];
    //     setSorted(sort.reverse());
    // }, [sorted])

    return (

        <Paper elevation={3} className={classes.root}>
            <button onClick={() => setSorted(sorted.reverse())}>Sort</button>
        {sorted.map(movie => {
                  return (
                   <MovieCard movie={movie} />
                )})}        
        </Paper>
    
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        display: 'grid',
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