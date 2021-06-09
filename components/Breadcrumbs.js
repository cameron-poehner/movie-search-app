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

export default function Breadcrumb({ query }) {
    const classes = useStyles();
    const { id } = query;
    console.log('query', id)
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link href="/">
          <a className={classes.link}>
          IMDb
          </a>
          </Link>
      <Typography href="/search/[id]" color="inherit">
          search
      </Typography>
      <Typography>
            {id}
      </Typography>
    </Breadcrumbs>
  );
}