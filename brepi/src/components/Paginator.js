import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

const Paginator = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Paginator;
