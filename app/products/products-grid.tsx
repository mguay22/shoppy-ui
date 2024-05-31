"use client";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Product as IProduct } from "./interfaces/product.interface";
import Product from "./product";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { API_URL } from "../common/constants/api";
import revalidateProducts from "./actions/revalidate-products";

interface ProductGridProps {
  products: IProduct[];
}

export default function ProductsGrid({ products }: ProductGridProps) {
  useEffect(() => {
    const socket = io(API_URL!);

    socket.on("productUpdated", () => {
      revalidateProducts();
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflow: "scroll" }}>
      {products.map((product) => (
        <Grid key={product.id} sm={6} lg={4} xs={12}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
