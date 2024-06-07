import React from "react";
import { Layout } from "../components/Layout";
import { CardList } from "../components/CardList";
import Carrousel from "../components/Carrousel";

const Home = () => {
  return (
    <>
      <Carrousel/>
      <CardList />
    </>
  );
};

export default Home;
