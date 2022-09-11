import React, { useState, useEffect } from "react";
import SundarHeader from "../component/Header";
import Slider from "../component/Slider";
import { getAllType } from "../services/api";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("akjhdjkldsah");

  useEffect(() => {
    getAllType().then((data) => {
      console.log("data", data);
      setData(data);
    });
  }, []);
  // const fetchData = async () => {
  //   const res = await getAllType();
  //   console.log("res", res);
  // };
  console.log("data!!!!", data);

  return (
    <>
      <SundarHeader />
      <Slider />
      <h1>hello ! welcome in home</h1>
      {data?.results?.map((item) => {
        return (
          <img
            src={"http://image.tmdb.org/t/p/w500/" + item.poster_path}
            alt={item.altText}
            style={{ height: "100px", width: "100px" }}
          />
        );
      })}
    </>
  );
};

export default Home;
