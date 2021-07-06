import { makeStyles } from '@material-ui/core/styles';
import TVHeading from './TVHeading';
import TVDescription from './TVDescription';
import VideoSlider from '../VideoSlider'
import CastList from '../CastList'
import Similar from '../Similar'
import TVDetails from './TVDetails';

export default function TVShow ({ query, data }) {
    const classes = useStyles();

    const { credits, videos, similar } = data;
    const { cast } = credits;

    return (
        <div className={classes.root}>
            <TVHeading data={data} query={query} />
            <TVDescription data={data} />
            <VideoSlider videos={videos} />
            <CastList cast={cast} />
            <Similar similar={similar} />
            <TVDetails data={data} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        height: 'auto',
        margin: '2rem',
        width: '70vw',
        background: '#1c1c1c',
    },
}))