import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import { yearFormatter } from '../lib/helper';

export default function TVHeading({ query, data }) {
    const classes = useStyles();
    const { name, first_air_date, last_air_date, vote_average, vote_count } = data;

    return (
        <header className={classes.root}>
            <Paper elevation={3} className={classes.Paper}>
            <div>
            <h1 className={classes.title}>{name}</h1>
            <ul className={classes.desc}>
              <li className={classes.firstItem}>TV Series</li>
              <li>|</li>
              <li className={classes.item}>{yearFormatter(first_air_date)}</li>
              <li>-</li>
              <li className={classes.item}>{yearFormatter(last_air_date)}</li>
            </ul>
            </div>
            <div className={classes.rating}>
            <StarIcon className={classes.icon}/>
              <div className={classes.container}>
              <span><strong className={classes.voteAverage}>{vote_average}</strong> / 10</span>
              <p className={classes.voteCount}>{new Intl.NumberFormat().format(vote_count)}</p>
              </div>
              </div>
            </Paper>
        </header>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        background: '#272C34',
    },
    Paper: {
        background: '#1c1c1c',
        color: 'white',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        alignItems: 'baseline',
        justifyItems: 'start',
        margin: '0',
        padding: '1rem',
        paddingTop: '0'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: '3rem',
        fontWeight: '200',
    },
    desc: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'start',
        margin: '0',
        padding: '0'
    },
    firstItem: {
        paddingRight: '.5rem'
    },
    item: {
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
    },
    rating: {
        color: 'white',
        justifySelf: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        color: '#F4C518',
        fontSize: '3rem'
    },
    container: {
        fontWeight: '200',
        fontSize: '.8rem'
    },
    voteAverage: {
        fontSize: '2rem',
        fontWeight: '400'
    },
    voteCount: {
        padding: '0',
        margin: '0',
    },
}))