import { makeStyles } from '@material-ui/core/styles';
import Person from '../../components/Person'

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=50ee20a8e3da5025fd2012e0cc6f35ad&language=en-US&append_to_response=details,combined_credits`;
    const res = await fetch(url);
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

export default function PersonPage({ data }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Person data={data} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        height: 'auto',
        minHeight: '100vh',
        background: '#272C34',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
}))