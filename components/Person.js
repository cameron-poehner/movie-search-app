import { makeStyles } from '@material-ui/core/styles';

export default function Person({ data }) {
    const classes = useStyles();
    console.log('Person Data', data);

    return (
        <div className={classes.root}>
            <h2>{data.name}</h2>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
    },
}))