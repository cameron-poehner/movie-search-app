import { makeStyles } from '@material-ui/core/styles'
import MovieHeading from './MovieHeading'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
        padding: '0',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        width: '80vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        
    }
}))

export default function MovieCard({ data }) {
    const classes = useStyles();
    const { Title, Year } = data;
    return (
        <div className={classes.root}>
            {/* <h2 className={classes.Title}>{Title} ({Year})</h2> */}
            <MovieHeading data={data} />
        </div>
    )
}