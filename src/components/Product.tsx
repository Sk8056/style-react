import { FC } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import ProductList from "./ProductList";

/* Prop Type */
export interface ProductProp {
  id: number;
  img: string;
}

/* Design */
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

/* Component */
const Product: FC<{}> = () => {
  return (
    <Container>
      {popularProducts.map((product: ProductProp) => (
        <ProductList key={product.id} img={product.img} id={product.id} />
      ))}
    </Container>
  );
};

export default Product;
