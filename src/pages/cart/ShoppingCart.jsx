import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CartProduct from "../../components/cart/CartProduct";
import CartDetails from "../../components/cart/CartDetails";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getProducts();
    // alert(1);
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/shoppingCart/1"
    );
    if (response.data.data.items.length > 0) {
      setProducts(response.data.data.items);
      setTotal(response.data.data.total);
    }
    console.log(response.data.data.items);
  };

  return (
    <div>
      {/* <NavBar /> */}
      <Container fixed>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {total &&
            products.map((product, index) => (
              <CartProduct key={index} product={product} />
            ))}
        </Grid>
      </Container>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <CartDetails total={total} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
