import { makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        padding: '1rem',
        margin: '1rem'

    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        letterSpacing: '2px'
    }
}))

export default function MovieHeading({ data }) {
    const classes = useStyles();
    console.log(data)
    const { Title, Year, Rated, Runtime, Genre, imdbRating, Released,  } = data;
    return (
        <div className={classes.root}>
            <h2 className={classes.Title}>{Title} ({Year}) | {imdbRating}</h2>
            <div>{Rated} | {Runtime} | {Genre} | {Released}</div>
        </div>
    )
}