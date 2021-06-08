import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        width: '100%',
        height: '100px',
        borderTop: '1px solid #eaeaea',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Noto Sans JP',
        letterSpacing: '5px'
    },
}))

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <h3>IMDb</h3>
        </footer>
    )
}