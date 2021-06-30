import { makeStyles, Paper } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import { genreList, starsList } from '../lib/helper';

export default function MovieHeading({ data }) {
    const classes = useStyles();

    const { title, release_date, runtime, genres, vote_average, vote_count } = data;

    const yearFormatter = (fullDate) => {
            return fullDate.slice(0, 4);
    }

    const date = new Date(Date.parse(release_date));
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
   
    const runTime = (param) => {
        let hour = (param / 60);
        let rhours = Math.floor(hour);
        let minutes = (hour - rhours) * 60;
        let rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes}min`;
    }
 
    return (
        <Paper elevation={3} className={classes.root}>
          <div className={classes.header}>
            <h2 className={classes.heading}><strong className={classes.Title}>{title}</strong>
            ({yearFormatter(release_date)})</h2>
            <div className={classes.description}>
              <span className={classes.runtime}>{runTime(runtime)}</span> | 
              <span className={classes.descItem}>{genreList(genres)}</span> | 
              <span className={classes.descItem}>{new Intl.DateTimeFormat('en-US', options).format(date)}</span>
            </div>
          </div>  
            <div className={classes.rating}>
              <StarIcon className={classes.icon}/>
              <div className={classes.container}>
              <span><strong className={classes.voteAverage}>{vote_average}</strong> / 10</span>
              <p className={classes.voteCount}>{new Intl.NumberFormat().format(vote_count)}</p>
              </div>
            </div>
         
        </Paper>)
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        borderRadius: '5px',
        width: '100%',
        height: 'auto',
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '4fr 1fr',
        alignItems: 'center',
        overflowWrap: 'break-word',
        margin: '0',
        padding: '0',
    },
    header: {
        color: 'white',
        width: '100%',
        height: '100%',
        paddingLeft: '2rem',
        paddingBottom: '1rem'
    },
    heading: {
        fontWeight: '200',
        letterSpacing: '4px'
    },
    Title: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: '400',
        letterSpacing: '4px',
        overflowWrap: 'break-word',
        color: 'white',
        marginRight: '1rem'
    },
    description: {
        color: 'white',
        BoxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center'
    },
    runtime: {
        letterSpacing: '4px',
        paddingRight: '10px',
        fontFamily: 'Roboto',
        fontWeight: '200'
    },
    descItem: {
        paddingLeft: '10px',
        paddingRight: '10px',
        letterSpacing: '4px',
        fontFamily: 'Roboto',
        fontWeight: '200'
    },
    icon: {
        color: '#F4C518',
        fontSize: '3rem'
    },
    rating: {
        color: 'white',
        justifySelf: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        fontWeight: '200',
        fontSize: '.8rem'
    },
    voteAverage: {
        fontSize: '2rem',
        fontWeight: '400'
    },
    voteCount: {
        padding: '0',
        margin: '0',
    },
}))