import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

export default function PersonDetails({ data }) {
    const classes = useStyles();

    const { biography, combined_credits } = data;
    const { cast, crew } = combined_credits;
    const { id, release_date } = cast;

    const yearFormatter = (fullDate) => {
        return fullDate.slice(0, 4);
}

    console.log('Person Details', data);

    return (
        <section className={classes.root}>
          {biography ? <article className={classes.bio}>
            <h3>Biography</h3>
            <p>{biography}</p>
            </article> : null}
          <div className={classes.container}>
              <h3 className={classes.plot}>Filmography</h3>
              <h4 className={classes.plot}><strong>Actor</strong> ({`${cast.length} credits`}) </h4>
              {cast.filter(movie => movie.title).map(member => 
              <Paper key={member.id} className={classes.actor}>
                  <Link href={{
                      pathname: `/movies/[id]`,
                      query: {
                          id: member.id,
                      },
                  }}>
                <Button 
                  className={classes.button}
                  type="text">{member.title}</Button>
                  </Link>
                <p className={classes.plot}>{member.character}</p>
                <p className={classes.year}>{yearFormatter(member.release_date)}</p>
              </Paper>)}
          </div>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        background: '#1c1c1c',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'start',
        boxSizing: 'border-box',
    },
    container: {
        background: 'black',
        padding: '4rem',
        width: '100%'
    },
    actorHeading: {
        margin: '1rem',
        padding: '1rem',
    },
    actor: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'start',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        background: '#272c34',
        overflowWrap: 'word-break'
    },
    // Needed to overide FlexBox Justify Content to Align all buttons. 

    button: {
        color: 'white',
        textTransform: 'none',
        padding: '0',
        margin: '0',
        justifyContent: 'start',
        textAlign: 'left',
        '&:hover': {
            color: '#0d47a1',
        }
    },
    bio: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '80%',
        padding: '2rem 0',
        margin: '0',
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        lineHeight: '1.5rem',
        color: 'white',
       
    },
    heading: {
        fontFamily: 'Roboto',
        fontSize: '2rem',
        fontWeight: '400',
        letterSpacing: '4px',
        overflowWrap: 'break-word',
        color: 'white',
        marginRight: '1rem'
    },
    plot: {
        fontFamily: 'Roboto',
        letterSpacing: '2px',
        lineHeight: '1.5rem',
        color: 'white',
        alignSelf: 'start',
        width: '80%',
        padding: '1rem'
    },
    year: {
        color: 'white'
    },
}))