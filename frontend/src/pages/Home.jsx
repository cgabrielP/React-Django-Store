import React from "react";
import { Layout } from "../components/Layout";
import { CardList } from "../components/CardList";
import Carrousel from "../components/Carrousel";

const Home = () => {
  return (
    <>
      <Carrousel/>
      <h3 className="py-2">Lo mas buscado</h3>
      <CardList />
    </>
  );
};

export default Home;
