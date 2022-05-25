import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/searchBar";

import Head from "next/head";
import Exchanges from "../../components/exchanges/exchanges";
import useSWR from "swr";

const ExchangesPage = () => {
  const [search, setSearch] = useState("");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://api.coingecko.com/api/v3/exchanges",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>Exchanges</title>
      </Head>
      <div className="coin_app">
        <SearchBar
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Exchanges exchanges={data} search={search} />
      </div>
    </div>
  );
};

export default ExchangesPage;
