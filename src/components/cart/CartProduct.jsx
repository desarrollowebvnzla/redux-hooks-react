import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import imgProduct from "../../assets/img/product.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function CartProduct({ product }) {
  const classes = useStyles();

  return (
    <Grid item>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={imgProduct} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Cantidad : {product.quantity}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Precio unitario : {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Codigo: {product.code}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Eliminar
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$ {product.total}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Grid>
  );
}
