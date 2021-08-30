import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import ProductList from "../../initialState";
import Products from '../components/Products';

export default function Home() {
  return (
    <div className="Home">
      <Layout>
        <Products products={ProductList.products} />
      </Layout>
    </div>
  );
}
