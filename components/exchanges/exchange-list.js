import Link from "next/link";
import styles from "./exchanges.module.css";

const ExchangesList = ({ name, image, country, rank, id, volume, year }) => {
  return (
    <Link href={`/exchanges/${id}`}>
      <a>
        <div className={styles.exchange_container}>
          <div className={styles.exchange_row}>
            <div className={styles.exchange}>
              <p className={styles.exchange_rank}>{rank}</p>
              <img src={image} alt="crypto" />
              <h2>{name}</h2>
              <p className={styles.exchange_country}>{country}</p>
            </div>
            <div className={styles.exchange_data}>
              <p className={styles.volume}>${volume.toLocaleString()}</p>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ExchangesList;
