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

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    width: 250,
    height: 500,
    margin: '1rem',
    padding: 0,
    boxSizing: 'border-box',
    color: 'white',
    background: '#4f555e',
  },
  media: {
    width: '100%',
    maxWidth: '100%',
    height: 345,
    objectFit: 'contain',
  },
  title: {
      fontSize: '1rem',
  },
  buttons: {
      position: 'sticky',
      color: 'white'
  },
  button: {
    color: 'white',
    '&:hover': {
      color: '#002171',
    }
  }
});

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const { poster_path, title, id } = movie;
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="small" className={classes.button}>
          Share
        </Button>
        <Link href={{
          pathname: `/movies/[id]`,
          query: {
            id: id
          },
        }}>
        <Button size="small" className={classes.button}>
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}