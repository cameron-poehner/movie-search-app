import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

export default function NowPlaying({ data }) {
    const classes = useStyles();
    const { results } = data;
    const [current, setCurrent] = useState(results[0]);
    console.log('results', results);
    console.log('current', current)
    // 1. Display one Item at a Time
    // 2. Create Next Button to iterate through movie cards
    // 3. Create Prev Button to reverse through cards
    // 4. Allow cycling through the end of the array back to the beginning and vice versa
    // 5. Setup Timer for Slider
    // 6. Improve design - Images Only? Title Over the Bottom 1/3 of image?
    return(
        <div className={classes.root}>
          <h2 className={classes.title}>
            NOW PLAYING
          </h2>
            <div className={classes.nowPlaying}>
            {results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
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
    }
}))