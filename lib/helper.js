import Button from '@material-ui/core/Button'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        letterSpacing: '3px',
        margin: '0px',
        fontFamily: 'Roboto',
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: '300',
        paddingLeft: '0',
        paddingTop: '0',
        paddingBottom: '0',
        paddingRight: '.5rem',
            '&:hover': {
            color: '#0d47a1',
            textDecoration: 'underline',
        }
    }
}))

export function truncate(string) {
    let replace = string.slice(0, 20).concat('...');
    return string.length <= 20 ? string : replace;
  }

export const yearFormatter = (fullDate) => {
    return fullDate.slice(0, 4);
}

export const genreList = (params) => {
    const classes = useStyles();
    let string = params.map(genre => genre.name);
    let newString = string.map((str, idx) => 
    
        <Link 
        href="/"
        key={idx}>
            <Button 
              type="text"
              className={classes.root} >
            {idx === string.length - 1 ? str : `${str},`}
            </Button>  
        </Link>
    )
    console.log('string', newString);
    return newString;
}

export const starsList = (params) => {
    const classes = useStyles();
    let string = params.map(genre =>
      <Link 
      key={genre.id}
        href={{
            pathname: `/person/[id]`,
            query: {
                id: genre.id,
            }
        }}
        
        passHref>
            <Button 
            
              type="text"
              className={classes.root}>
                  {genre.name}
            {/* {item.id === string.length - 1 ? item : `${item},`} */}
            </Button>  
        </Link>
    );
    console.log('Helper', string);
    return string;
}

