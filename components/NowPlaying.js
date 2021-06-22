import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from '../components/MovieCard'
import { useEffect, useState } from 'react';

export default function NowPlaying({ data }) {
    const classes = useStyles();
    const { results } = data;
    const [current, setCurrent] = useState(0);
    
    console.log('results', results);
    console.log('current', current)
    // 1. Display one Item at a Time
      // Accomplished by setting state - current - to initail value of results array index[0];
    // 2. Create Next Button to iterate through movie cards 👍
    useEffect(() => {
        setCurrent(current + 1);
    }, [])
    // 3. Create Prev Button to reverse through cards
    // 4. Allow cycling through the end of the array back to the beginning and vice versa
    // 5. Setup Timer for Slider
    // 6. Improve design - Images Only? Title Over the Bottom 1/3 of image?
    return(
        <Paper elevation={3} className={classes.root}>
          <h2 className={classes.title}>
            NOW PLAYING
          </h2>
            <div className={classes.nowPlaying}>
            <Button className={classes.button}>prev</Button>
            {results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            <Button 
              className={classes.button}>Next</Button>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '90vw',
        background: '#00000d',
        fontFamily: 'Noto Sans JP',
        fontSize: '2rem',
       
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    nowPlaying: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    button: {
        color: 'white',
        '&:hover': {
            color: '#002171'
        }
    }
}))