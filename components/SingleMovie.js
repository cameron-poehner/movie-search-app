import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MovieHeading from './MovieHeading'

export default function SingleMovie({ data }) {
    const classes = useStyles();
    const { poster_path, title, Plot, credits } = data;
    const { crew, cast } = credits;
    const shortCast = cast.slice(0, 5)
    return (
        <Paper elevation={3} className={classes.root}>
            <MovieHeading data={data} />
            <div className={classes.container}>
                <img 
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`} 
                  alt={title}
                  className={classes.Poster} />
                <div className={classes.descContainer}>
                    <p>{Plot}</p>
                    <p className={classes.director}>Director: {crew.filter(member => member.job === "Director").map(job => <span>{job.name}</span>)}</p>
                    <p>Writers: {crew.filter(member => member.job === "Screenplay").map(job => <span>{job.name}</span>)}</p>
                    <p>Actors: {shortCast.map((member, index) => <span key={index}>{member.name}</span>)}</p>
                </div>
            </div>
        </Paper>
    )
}

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
        justifyContent: 'start',
        alignItems: 'flex-start',
        padding: '4rem',
        boxSizing: 'border-box',
        color: 'white'
    },
    director: {
        color: 'white'
    }
})) 
