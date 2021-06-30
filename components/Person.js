import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonHeading from './PersonHeading';
import PersonDetails from './PersonDetails'

export default function Person({ data }) {
    const classes = useStyles();
    console.log('Person Data', data);
    const { profile_path, birthday, deathday, place_of_birth } = data;

    const birthDate = new Date(Date.parse(birthday));
    const deathDate = new Date(Date.parse(deathday));
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    return (
        <Paper elevation={3} className={classes.root}>
            <PersonHeading data={data} />
            <div className={classes.container}>
            <img 
              className={classes.profile}
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${profile_path}`} 
              alt="" />
              <div className={classes.descContainer}>
                <p className={classes.birthday}>Born: {new Intl.DateTimeFormat('en-US', options).format(birthDate)}</p>
                {deathday === null ? null : <p className={classes.birthday}>Died: {new Intl.DateTimeFormat('en-US', options).format(deathDate)}</p>}
                <p>Birthplace: {place_of_birth}</p>
                </div>
            </div>
            <PersonDetails data={data} />
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        fontFamily: 'Roboto',
        width: '70vw',
        margin: '0',
        padding: '0'
    },
    container: {
        height: 'auto',
        width: '70vw',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profile: {
        width: '250px'
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
        color: 'white',
        fontFamily: 'Roboto',
        letterSpacing: '1px',

    },
    birthday: {
        color: 'white'
    },
})) 