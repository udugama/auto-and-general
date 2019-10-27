import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import leftPad from 'left-pad';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f5f5f5', // '#333'
    padding: theme.spacing(0.5, 3),
    alignContent: leftPad,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
  },
}));

export default function Story(props) {
  const classes = useStyles();
  const story = props.data;

  return (
    <div>
      <Paper className={classes.root} square={false} spacing={3}> 
      <Link href={story.url} color="inherit" target="_blank" rel="noreferrer" >
        <Typography component='p' align='left'>
            Title: {story.title}
        </Typography>
      </Link>
        <Typography variant='caption' component='h5' align='left' >
            Author: {story.author}
        </Typography>
      </Paper>
    </div>
  );
}