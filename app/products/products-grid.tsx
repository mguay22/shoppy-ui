"use client"

import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { Product as IProduct } from "./interfaces/product.interface"
import Product from "./product"
import { useEffect } from "react"
import revalidateProducts from "./actions/revalidate-products"
import { Socket, io } from "socket.io-client"
import getAuthentication from "../auth/actions/get-authentication"

interface ProductsGridProps {
  products: IProduct[]
}

export default function ProductsGrid({ products }: ProductsGridProps) {

  useEffect(() => {
    let socket: Socket;

    const createSocket = async () => {
      socket = io(process.env.NEXT_PUBLIC_API_URL!, {
        auth: {
          Authentication: await getAuthentication()
        }
      });
    
      socket.on('productUpdated', () => {
        revalidateProducts()
      })
    }

    createSocket()

    return () => { socket?.disconnect() }
  }, []);


  return (
     <Grid container spacing={3} sx={{ height: "85vh", overflow: "scroll" }}>
      {products.map((product) => (
        <Grid key={product.id} sm={6} lg={4} xs={12}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  )
}