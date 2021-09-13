import { FC } from "react";
import {
  Navbar,
  Announcements,
  Slider,
  Categories,
  Product,
} from "../components";
export const Home: FC = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
    </div>
  );
};
