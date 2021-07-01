import { makeStyles } from '@material-ui/core/styles';

export default function TVShow ({query}) {
    const classes = useStyles();

    console.log('tv show', query);

    return (
        <div className={classes.root}>
            I worked!
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        color: 'white'
    }
}))