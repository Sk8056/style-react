import { Send } from "@material-ui/icons";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 70px;
`;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  padding-left: 8px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
`;

const NewsLetter: FC<{}> = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
