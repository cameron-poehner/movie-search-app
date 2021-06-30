import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { Paper } from '@material-ui/core';

export default function CastMember({ member }) {
    const classes = useStyles();
    const { profile_path, id } = member;
    return (
        <Paper className={classes.root}>
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
        <span type="text" className={classes.text}>{member.character}</span>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '70%',
        textAlign: 'left',
        justifyItems: 'start',
        alignItems: 'center',
        fontFamily: 'Roboto',
        background: '#4f555e',
        margin: '1rem 0'
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
        },
    },
    text: {
        color: 'white'
    }
}))