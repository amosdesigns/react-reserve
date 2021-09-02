import React, { useEffect } from "react";
import axios from "axios";

function Home(props) {
  // console.table(props);
  // useEffect(() => {
    // getProducts();
  // }, []);

  // async function getProducts() {
    // const url = "http://localhost:3000/api/products";
    // const response = await axios.get(url);
    // console.table(response.data);
  // }

  return <>home</>;
}
Home.getInitialProps = async () => {
  // fetch data
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);
  return { products: response.data };
};
export default Home;
