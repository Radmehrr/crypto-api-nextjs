import Link from "next/link";
import styles from "./coins.module.css";

const CoinList = ({
  image,
  name,
  price,
  symbol,
  volume,
  priceChange,
  marketCap,
  id,
}) => {
  return (
    <Link href="/coin/[coinId]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt="crypto" />
              <h2>{name}</h2>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>

            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}
              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CoinList;
