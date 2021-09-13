import { FC } from "react";
import {
  Navbar,
  Announcements,
  Slider,
  Categories,
  Product,
  NewsLetter,
} from "../components";
export const Home: FC = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
    </div>
  );
};
