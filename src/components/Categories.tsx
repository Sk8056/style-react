import { FC } from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

export interface Item {
  id: number;
  img: string;
  title: string;
}

export interface ItemProp {
  item: Item;
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories: FC<{}> = () => {
  return (
    <Container>
      {categories.map((item: Item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
