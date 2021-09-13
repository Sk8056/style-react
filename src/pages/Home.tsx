import { FC } from "react";
import { Navbar, Announcements, Slider, Categories } from "../components";
export const Home: FC = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};
