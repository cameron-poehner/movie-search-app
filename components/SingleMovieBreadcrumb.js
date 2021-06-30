import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#1c1c1c',
        color: 'white',
    },
    link: {
        color: 'white',
        '&:hover': {
            color: 'blue'
        },
    }
}))

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SingleMovieBreadcrumb({ data }) {
    const classes = useStyles();
    // const { Title } = Search;
    const { Title } = data;
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link href="/">
          <a className={classes.link}>
          IMDb
          </a>
          </Link>
      <Typography href="/search/[id]" color="inherit">
          movies
      </Typography>
      <Typography>
            {Title}
      </Typography>
    </Breadcrumbs>
  );
}