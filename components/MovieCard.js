import { Paper } from '@material-ui/core';
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
        width: '70vw',
        height: 'auto',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    container: {
        height: 'auto',
        width: '70vw',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Poster: {
       boxSizing: 'border-box',
       height: '400px',
       width: '260px'
   },
    descContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '4rem',
        boxSizing: 'border-box'
    },

}))

export default function MovieCard({ data }) {
    const classes = useStyles();
    const { Poster, imdbID, Plot, Director, Writer, Actors } = data;
    return (
        <Paper elevation={3} className={classes.root}>
            <MovieHeading data={data} />
            <div className={classes.container}>
                <img 
                  src={Poster} 
                  alt={imdbID}
                  className={classes.Poster} />
                <div className={classes.descContainer}>
                    <p>{Plot}</p>
                    <p>Director: {Director}</p>
                    <p>Writers: {Writer}</p>
                    <p>Actors: {Actors}</p>
                </div>
            </div>
        </Paper>
    )
}