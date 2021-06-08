import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
    },
    error: {
        fontSize: '5rem',
        textTransform: 'uppercase',
        letterSpacing: '1rem'
    },
    desc: {
        fontSize: '2rem',
        letterSpacing: '.5rem'
    },
    results: {
        fontSize: '1.5rem',
        letterSpacing: '2px'
    }
}))

export default function ErrorMessage({ error }) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <h2 className={classes.error}><strong>{error}</strong></h2>
            <p className={classes.desc}>Uh Oh! I bet you feel silly!</p>
            <p className={classes.results}>We couldn't find any results for 'undefined',
            maybe it's time to try again</p>
        </div>
    )
}