import styles from "./coin.module.css";

const Coin = ({ coin }) => {
  return (
    <div className={styles.coin_page}>
      <div className={styles.coin_container}>
        <img
          src={coin.image.large}
          alt={coin.name}
          className={styles.coin_image}
        />
        <h1 className={styles.coin_name}>{coin.name}</h1>
        <p className={styles.coin_ticker}>{coin.symbol}</p>
        <p className={styles.coin_current}>
          {coin.market_data.current_price.usd.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { coinId } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
