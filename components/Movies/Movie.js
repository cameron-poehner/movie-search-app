import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MovieHeading from './MovieHeading';
import MovieDetails from './MovieDetails';
import VideoSlider from '../VideoSlider'
import MovieDescription from './MovieDescription';
import CastList from '../CastList'
import Similar from '../Similar'

export default function Movie({ data }) {
    const classes = useStyles();
    const { credits, videos, similar } = data;

    return (
        <Paper elevation={3} className={classes.root}>
            <MovieHeading data={data} />
            <MovieDescription data={data} />
            <VideoSlider videos={videos} />
            <CastList credits={credits} />
            <Similar similar={similar} />
            <MovieDetails data={data} />
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '5rem 0',
        padding: '0',
        background: '#1c1c1c',
        color: 'white',
        width: '70vw',
        height: 'auto',
    },
})) 
