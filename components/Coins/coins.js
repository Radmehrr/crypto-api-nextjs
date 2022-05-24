import CoinList from "./coin-list";

const Coins = ({ coins, search }) => {
  return (
    <div>
      {coins
        .filter((coin) => {
          if (coin.name.toLowerCase().includes(search?.toLowerCase()))
            return coin;
        })
        .map((coin) => {
          return (
            <CoinList
              key={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              volume={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              marketCap={coin.total_volume}
              id={coin.id}
            />
          );
        })}
    </div>
  );
};

export default Coins;
