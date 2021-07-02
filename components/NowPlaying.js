import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleImageSlider from 'react-simple-image-slider';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NowPlaying({ data }) {
    const classes = useStyles();
    const router = useRouter();
    const { results } = data;
    
    const images = results.map(movie => 
        ({ url: `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`,
           id: movie.id}));

    console.log('images', images);
    console.log('router', router);
    console.log('results', results);

    console.log('id', images[0].id);

    return(
        <Paper elevation={3} className={classes.root}>
          <h2 className={classes.title}>
            NOW PLAYING
          </h2>
            <div className={classes.nowPlaying}>
            <SimpleImageSlider
            width={400}
            height={600}
            images={images}
            showNavs={true}
            onClick={() => router.push(`/movies/${images[0].id}`)}
            navStyle={2}
            navMargin={10}
            slideDuration={0.5} />
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
        minHeight: '100vh',
        height: 'auto',
        background: '#00000d',
        fontFamily: 'Noto Sans JP',
        fontSize: '2rem',
       
    },
    title: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        color: 'white',
        '&:hover': {
            color: '#002171'
        }
    }
}))