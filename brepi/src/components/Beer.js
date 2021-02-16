import Grid from '@material-ui/core/Grid';

const Beer = ({ beers }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {beers.map((beer) => (
          <div key={beer.id}>
            <Grid className="grid" item xs={4}>
              <div>
                <p></p>
                <img src={beer.image_url} alt="" />
              </div>
              <p>{beer.name}</p>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Beer;
