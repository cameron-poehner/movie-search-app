import { makeStyles } from '@material-ui/core/styles';

export default function TVHeading({ query, data }) {
    const classes = useStyles();
    const { name } = data;

    return (
        <header className={classes.root}>
            <h1>{name}</h1>
        </header>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white'
    }
}))