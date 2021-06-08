import MovieCard from '../../components/MovieCard'
import { makeStyles } from '@material-ui/core/styles'
import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: '100vw'
    }
}))

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `http://www.omdbapi.com/?i=${id}&apikey=65137754`
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function SingleMoviePage({ data }) {
    const classes = useStyles();
    console.log(data)
    // const { Search } = data;
    return (
        <div className={classes.root}>
          <MovieCard data={data} />
        </div>
    )
}