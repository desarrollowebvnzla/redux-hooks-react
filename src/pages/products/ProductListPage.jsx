import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container } from "@material-ui/core";
import ProductList from "../../components/products/ProductList";
import { getProductsAction } from "../../redux/actions/productsAction";
import { useHistory } from "react-router-dom";

export default function ProductsListPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);
  let history = useHistory();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const handleGoDetailProduct = (id) => {
    history.push(`product/${id}`);
  };

  const renderProducts = () => {
    if (loading) {
      return (
        <div>
          <h1>Cargando productos...</h1>
        </div>
      );
    } else if (products && !products.length) {
      return (
        <div>
          <h1>No se encontraron resultados</h1>
        </div>
      );
    } else if (products) {
      return (
        <Grid container spacing={3}>
          {products &&
            products.map((product, index) => (
              <ProductList
                key={index}
                product={product}
                handleGoDetailProduct={() =>
                  handleGoDetailProduct(product.product_id)
                }
              />
            ))}
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
      <Container fixed>{renderProducts()}</Container>
    </div>
  );
}
