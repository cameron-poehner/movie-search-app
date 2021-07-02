import { makeStyles } from '@material-ui/core/styles';
import TVHeading from './TVHeading';

export default function TVShow ({ query, data }) {
    const classes = useStyles();

    console.log('tv show', query);
    console.log('tv show data', data);

    return (
        <div className={classes.root}>
            <TVHeading data={data} query={query} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        color: 'white'
    }
}))