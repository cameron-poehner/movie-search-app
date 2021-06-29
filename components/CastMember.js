import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function CastMember({ member }) {
    const classes = useStyles();
    const { profile_path, id } = member;
    return (
        <div className={classes.root}>
        <img 
          className={classes.profile}
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${profile_path}`} 
          alt="" />
        <Link href={{
            pathname: `/person/[id]`,
            query: {
                id: id,
            }
        }}>
        <Button type="text" className={classes.name}>{member.name}</Button>
        </Link>
        <span type="text">{member.character}</span>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto'
    },
    profile: {
        width: '50px'
    },
    name: {
        color: 'white',
        textTransform: 'none',
        margin: '1rem',
        '&:hover': {
            color: 'blue',
        }
    }
}))