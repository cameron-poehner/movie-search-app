import { makeStyles } from "@material-ui/core";
import TVShow from "../../components/TVShow";

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=50ee20a8e3da5025fd2012e0cc6f35ad&language=en-US`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

export default function TVShowPage({query, data}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <TVShow query={query} data={data} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        color: 'white'
    }
}))