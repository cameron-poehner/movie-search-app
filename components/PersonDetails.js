import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

export default function PersonDetails({ data }) {
    const classes = useStyles();

    const { biography, combined_credits } = data;
    const { cast, crew } = combined_credits;
    const { id } = cast;

    console.log('Person Details', data);

    return (
        <section className={classes.root}>
          <article>
            <h3>Biography</h3>
            <p>{biography}</p>
          </article>
          <div>
              <h3>Filmography</h3>
              <h4>Actor</h4>
              {cast.filter(movie => movie.title).map(member => 
              <div key={member.id} className={classes.actor}>
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
                <p>{member.character}</p>
                {/* <year>{}</year> */}
              </div>)}
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
        flexDirection: 'column'
    },
    actor: {
        display: 'flex',
    },
    button: {
        color: 'white',
        textTransform: 'none',
        '&:hover': {
            color: 'blue',
        }
    }
}))