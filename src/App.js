import React, {useRef } from 'react';
import { Grid } from "@material-ui/core";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from './components/Main/Main';

const App = () => {
  const classes = useStyles();
  const main = useRef(null)
  

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}} >
        <Grid item xs={12} sm={3} className={classes.mobile} >
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} >
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop} >
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last} >
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App