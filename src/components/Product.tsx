import { FC } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import Products from "./Products";

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
        <Products key={product.id} img={product.img} id={product.id} />
      ))}
    </Container>
  );
};

export default Product;
