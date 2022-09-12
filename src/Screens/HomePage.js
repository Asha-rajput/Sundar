import React, { useState, useEffect } from "react";

import Card from "../component/Card";
import SundarHeader from "../component/Header";
import Slider from "../component/Slider";
import SliderImage from "../component/SliderImage";
import { getAllType } from "../services/api";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("akjhdjkldsah");

  useEffect(() => {
    getAllType().then((data) => {
      setData(data);
    });
  }, []);

  // const fetchData = async () => {
  //   const res = await getAllType();
  //   console.log("res", res);
  // };
  console.log("data!!!!", data);

  

  return (
    <Card>
      <SundarHeader />
      <Slider />
      <h1 style={{ color: "white" ,fontSize:'25px'}}>Movies!!</h1>
      <SliderImage data={data}/>
    </Card>
  );
};

export default Home;
