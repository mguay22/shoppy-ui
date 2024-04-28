import { Card, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { API_URL } from "../common/constants/api";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card className="p-4">
      <Stack gap={3}>
        <Typography variant="h4">{product.name}</Typography>
        {product.imageExists && (
          <Image
            src={`${API_URL}/products/${product.id}.jpg`}
            width="0"
            height="0"
            className="w-full h-auto"
            sizes="100vw"
            alt="Picture of the product"
          />
        )}
        <Typography>{product.description}</Typography>
        <Typography>${product.price}</Typography>
      </Stack>
    </Card>
  );
}
