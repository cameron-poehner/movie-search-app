import { moviesResults } from '../store/moviesSlice'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0',
        padding: '0',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '60vw',
        textAlign: 'left',
        listStyle: 'none',
        height: '100vh',
    },
    item: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100px'
    },
    Poster: {
        height: '100%',
        width: '50px',
        marginRight: '1rem'
    },
    Title: {
        fontFamily: 'Roboto',
        fontWeight: '200',
        fontSize: '18px',
        marginLeft: '2rem',
        marginRight: '2rem',
        letterSpacing: '2px',
        '&:hover': {
            color: 'blue',

        }
    },
    Year: {
        fontFamily: 'Roboto',
        textAlign: 'right',
        letterSpacing: '5px'
    },

}))

export default function MoviesList({ Search }) {
    const classes = useStyles();
    console.log('data', Search)
    return (

            <ul className={classes.root}>
                {Search.map(movie => {
                  const { Poster, Title, Year, imdbID } = movie;
                  return (
                    <li 
                      key={imdbID}
                      className={classes.item}>
                      <Link 
                        href="/movies/[id]"
                        as={`/movies/${imdbID}`}
                        >
                      <a
                    >
                      <img 
                        src={Poster} 
                        alt={imdbID} 
                        className={classes.Poster}
                         />  
                      </a>
                      </Link>
                       <Link 
                        href="/movies/[id]"
                        as={`/movies/${imdbID}`}
                        >
                          <a className={classes.Title}>
                           {Title}
                          </a>
                      </Link>
                      <p className={classes.Year}>         
                        ({ Year })
                        </p>
                    </li>
                )})}        
            </ul>

    
    )
}


