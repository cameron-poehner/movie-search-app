import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import '../next.config.js';

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const { poster_path, title, id, vote_average } = movie;

  function truncate(string) {
    let replace = string.slice(0, 20).concat('...');
    return string.length <= 20 ? string : replace;
  }

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
      <Link href={{
          pathname: `/movies/[id]`,
          query: {
            id: id
          },
        }}>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt=""
          title="Contemplative Reptile"
          layout="fill"
        />
        </Link>
      
      </CardActionArea>
      <CardContent className={classes.content}>
      <CardActions className={classes.buttons}>
        <StarIcon size="small" className={classes.star} />
        <Typography>
          {vote_average}
          </Typography>
        <Button size="small" className={classes.button}>
          <StarOutlineIcon />
        </Button>
       
        
      </CardActions>
      <Link href={{
          pathname: `/movies/[id]`,
          query: {
            id: id
          },
        }}>
        <Button className={classes.title} size="small">
            {truncate(title)}
        </Button>
        </Link>
          </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    width: 250,
    height: 450,
    margin: '1rem',
    padding: '0',
    boxSizing: 'border-box',
    color: 'white',
    background: '#272c34',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start'
  },
  media: {
    width: '100%',
    maxWidth: '100%',
    height: 345,
    objectFit: 'contain',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    textAlign: 'left',
    fontFamily: 'Noto Sans JP',
  },
  title: {
      color: 'white',
      letterSpacing: '1px',
      '&:hover': {
        color: '#002171',
      },
  },
  buttons: {
      color: 'white',
      margin: '0rem',
      padding: '0rem',
    },
  button: {
    color: 'white',
    textAlign: 'left',
   
    '&:hover': {
      color: '#002171',
    }
  },
  star: {
    color: '#F4C518'
  }
});