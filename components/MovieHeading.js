import { makeStyles, Paper } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star'

export default function MovieHeading({ data }) {
    const classes = useStyles();
    console.log(data)

    const { title, release_date, runtime, genres, vote_average, vote_count } = data;

    const yearFormatter = (fullDate) => {
            return fullDate.slice(0, 4);
    }

    const date = new Date(Date.parse(release_date));


    console.log(date)

    return (
        <Paper elevation={3} className={classes.root}>
          <div className={classes.header}>
            <span className={classes.heading}>
            <h2 className={classes.Title}>{title}</h2>
            <p className={classes.year}>({yearFormatter(release_date)})</p>
            </span>
            <div className={classes.description}>
              <span className={classes.runtime}>{runtime} minutes</span> | 
              <span className={classes.descItem}>{genres.map(genre => <span>{genre.name}</span>)}</span> | 
              <span className={classes.descItem}>{new Intl.DateTimeFormat('en-US').format(date)}</span>
            </div>
          </div>  
            <div className={classes.rating}>
              <StarIcon className={classes.icon}/>
              <div>
              <span>{vote_average} / 10</span>
              <p className={classes.voteCount}>{new Intl.NumberFormat().format(vote_count)}</p>
              </div>
            </div>
         
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        borderRadius: '5px',
        width: '100%',
        height: 'auto',
        minHeight: '20vh',
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        alignItems: 'center'
    },
    header: {
        color: 'white',
        width: '100%',
        height: 'auto',
        paddingLeft: '2rem',
        lineHeight: '.5rem',
        marginBottom: '2rem',
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        BoxSizing: 'border-box',
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '4px',
        color: 'white',
        overflowWrap: 'break-word'
    },
    year: {
        letterSpacing: '4px',
        fontSize: '1.5rem',
        fontWeight: '200',
        paddingLeft: '1rem'
    },
    description: {
        color: 'white',
        BoxSizing: 'border-box',
     
    },
    runtime: {
        letterSpacing: '4px',
        paddingRight: '10px'
    },
    descItem: {
        paddingLeft: '10px',
        paddingRight: '10px',
        letterSpacing: '4px'

    },
    icon: {
        color: '#F4C518',
        fontSize: '2rem'
    },
    rating: {
        color: 'white',
        justifySelf: 'center',
        display: 'flex',
        alignItems: 'start',
    },
    voteCount: {

    },
}))