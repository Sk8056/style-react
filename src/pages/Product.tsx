import { Add, Remove } from "@material-ui/icons";
import { FC } from "react";
import styled from "styled-components";
import { Announcements, Navbar, NewsLetter, Footer } from "../components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  object-fit: cover;
  height: 90vh;
  width: 100%;
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;
const ProductName = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.h2``;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const FilterColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
export const Product: FC<{}> = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <ProductInfoContainer>
          <ProductName>Denim Jumpsuit</ProductName>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, eos
            assumenda maiores asperiores fugiat odio, atque vitae amet, in ipsa
            debitis ea voluptatem possimus reiciendis quasi illum iusto sit
            minima!
          </Description>
          <Price>$200</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color:</FilterText>
              <FilterColor color="coral" />
              <FilterColor color="purple" />
              <FilterColor color="teal" />
            </Filter>
            <Filter>
              <FilterText>Size:</FilterText>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </ProductInfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};
