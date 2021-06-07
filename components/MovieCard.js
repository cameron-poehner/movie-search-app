import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
        padding: '0',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        
    }
}))

export default function MovieCard({ data }) {
    const classes = useStyles();
    const { Title } = data;
    return (
        <div className={classes.root}>
            <h2 className={classes.Title}>{Title}</h2>
            {/* <h2>Title: { Title } </h2> */}
        </div>
    )
}