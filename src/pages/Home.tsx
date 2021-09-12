import { FC } from "react";
import { Navbar, Announcements } from "../components";
export const Home: FC = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
    </div>
  );
};
