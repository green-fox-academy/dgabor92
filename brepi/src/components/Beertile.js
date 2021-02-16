import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Beer from './Beer';

const Beertile = () => {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBeers(data);
      });
  }, []);

  return <div>{beers && <Beer beers={beers} />}</div>;
};

export default Beertile;
