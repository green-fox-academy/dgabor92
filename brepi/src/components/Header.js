import React from 'react';
import Grid from '@material-ui/core/Grid';
import './header.css';

const Header = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Company's name...</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
