import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import {
  useAddress,
  useContract,
  useMetamask,
  useDisconnect,
  useContractMetadata,
  useContractCall,
} from "@thirdweb-dev/react";
import Login from "../components/Login";
import Loading from "../components/Loading";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return <Loading />;

  if (!address) return <Login />;

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
