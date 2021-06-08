import { makeStyles, Paper } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import StarIcon from '@material-ui/icons/Star'
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        borderRadius: '5px',
        width: '100%'
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        letterSpacing: '2px',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '2rem',
        marginRight: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        BoxSizing: 'border-box',
    },
    description: {
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        BoxSizing: 'border-box',
    },
    rating: {
        paddingRight: '10px',
    },
    descItem: {
        paddingLeft: '10px',
        paddingRight: '10px',
        letterSpacing: '4px'

    },
    icon: {
        color: 'yellow'
    }
}))

export default function MovieHeading({ data }) {
    const classes = useStyles();
    console.log(data)
    const { Title, Year, Rated, Runtime, Genre, imdbRating, Released, imdbVotes } = data;
    return (
        <Paper elevation={3} className={classes.root}>
            <h2 className={classes.Title}>{Title} ({Year}) | &nbsp;
           
            <span><StarIcon
              className={classes.icon}
             />&nbsp; {imdbRating} / 10 ({imdbVotes})</span> </h2>
           
            <div className={classes.description}>
              <span className={classes.rating}>{Rated}</span> | 
              <span className={classes.descItem}>{Runtime}</span> | 
              <span className={classes.descItem}>{Genre}</span> | 
              <span className={classes.descItem}>{Released}</span>
            </div>
        </Paper>
    )
}