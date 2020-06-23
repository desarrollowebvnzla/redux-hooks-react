import React, { useEffect } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import imgProduct from "../../assets/img/product.png";
import { getProductAction } from "../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    // maxWidth: 240,
    // width: 240,
    flexGrow: 1,
    // backgroundColor: "#f1f1f1",
  },
  containerImg: {
    width: 240,
    height: 242.535,
    margin: "auto",
  },
});

export default function ProductDetailPage() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProductAction(id));
    console.log(product);
  }, []);

  const renderProduct = () => {
    if (loading) {
      return (
        <div>
          <h1>Cargando productos...</h1>
        </div>
      );
    } else if (!product) {
      return (
        <div>
          <h1 onClick={() => console.log(product.product_price)}>
            Producto no encontrado
          </h1>
        </div>
      );
    } else if (product) {
      return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.containerImg}
                  component="img"
                  alt="Contemplative Reptile"
                  //   height="284"
                  //   width="284"
                  image={imgProduct}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    $ {product.product_price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.product_name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      );
    } else if (error) {
      return (
        <div>
          <h1>Error de servidor!</h1>
        </div>
      );
    }
  };

  return (
    <div>
      <Container fixed>{renderProduct()}</Container>
    </div>
  );
}
