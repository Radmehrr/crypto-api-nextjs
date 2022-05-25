import React from "react";
import ExchangesList from "./exchange-list";

const Exchanges = ({ exchanges, search }) => {
  return (
    <div>
      {exchanges
        .filter((exchange) => {
          if (exchange.name.toLowerCase().includes(search.toLowerCase())) {
            return exchange;
          }
        })
        .map((exchange) => (
          <ExchangesList
            key={exchange.id}
            country={exchange.country}
            name={exchange.name}
            image={exchange.image}
            id={exchange.id}
            volume={exchange.trade_volume_24h_btc}
            year={exchange.year_established}
            rank={exchange.trust_score_rank}
          />
        ))}
    </div>
  );
};

export default Exchanges;
