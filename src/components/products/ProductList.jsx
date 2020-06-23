import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

import imgProduct from "../../assets/img/product.png";

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

export default function ProductList({ product, handleGoDetailProduct }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleGoDetailProduct}>
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
            <Typography variant="body2" color="textSecondary" component="p">
              {product.product_name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
