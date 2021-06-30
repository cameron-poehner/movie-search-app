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
            color: 'blue',
            textDecoration: 'underline',
        }
    }
}))

export const commaList = (params) => {
    const classes = useStyles();
    let string = params.map(genre => genre.name);
    let newString = string.map((str, idx) => 
    
        <Link 
        href={{
            pathname: `/person/[id]`,
            query: {
                id: id,
            }
        }}
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

