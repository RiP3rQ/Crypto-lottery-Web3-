import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Lottery Web3 Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>Essa</h1>
    </div>
  );
};

export default Home;
