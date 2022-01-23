import {List ,ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';

export const Todo = (props) => {
  return (
  <List>
      <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary='todo'></ListItemText>
      </ListItem>
          
  </List>

  )};
