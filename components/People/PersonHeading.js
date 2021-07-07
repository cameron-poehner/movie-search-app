import { makeStyles } from '@material-ui/core/styles';

export default function PersonHeading({ data }) {
    const classes = useStyles();

    const { name, known_for_department } = data;

    return (
        <header className={classes.root}>
            <h2 className={classes.title}>{name}</h2>
            <p className={classes.job}>{known_for_department}</p>
        </header>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: '#1c1c1c',
        height: 'auto',
        margin: '0',
        padding: '0',
        paddingLeft: '1rem',
        lineHeight: '.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start'
    },
    title: {
        color: 'white',
        fontWeight: '200',
        fontSize: '2rem',
        letterSpacing: '2px',
    },
    job: {
        color: 'white'
    }
}))