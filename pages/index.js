import React, { useEffect } from "react";
import axios from "axios";
import ProductList from "../components/index/ProductList";
import baseUrl from "../utils/baseUrl";
function Home({ products }) {
  return <ProductList products={products} />;
}
Home.getInitialProps = async () => {
  // fetch data
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
};
export default Home;
