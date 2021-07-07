import { makeStyles } from '@material-ui/core'
import CastMember from './CastMember'

export default function CastList({ credits }) { 
    const classes = useStyles();
    const { cast } = credits;
    return(
        <section className={classes.details}>
                <div className={classes.castContainer}>
                <h2 className={classes.cast}>Cast</h2>
            {cast.map(member => <CastMember key={member.id} member={member} />)}
            </div>
            </section>
    )
}

const useStyles = makeStyles((theme) => ({
    details: {
        padding: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cast: {
        // alignSelf: 'start',
        justifySelf: 'start',
        padding: '1rem',
        fontFamily: 'Roboto',
        fontSize: '2.5rem',
        fontWeight: '200',
        letterSpacing: '2px',
        paddingLeft: '0'
    },
    castContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyItems: 'center',
        width: '75%'
    },
}))