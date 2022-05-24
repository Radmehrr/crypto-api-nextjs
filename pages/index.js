import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";

import Coins from "../components/Coins/coins";
import SearchBar from "../components/SearchBar/searchBar";

const cryptoApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(cryptoApi, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <Head>
        <title>crypto</title>
      </Head>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <Coins coins={data} search={search} />
      </div>
    </div>
  );
}
