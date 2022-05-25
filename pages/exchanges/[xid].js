import Head from "next/head";
import Link from "next/link";

import styles from "./exchange-detailes.module.css";

const ExchangeDetailes = ({ exchange }) => {
  return (
    <div>
      <Head>
        <title>{exchange.name}</title>
      </Head>
      <div className={styles.img}>
        <Link href={exchange.url}>
          <img src={exchange.image} alt={exchange.name} />
        </Link>
      </div>
      <div className={styles.data}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>نام:</p>
            <p>{exchange.name}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>کشور:</p>
            <p>{exchange.country}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>حجم بازار:</p>
            <p>{exchange.trade_volume_24h_btc.toLocaleString()}$</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>رتبه: </p>
            <p>{exchange.trust_score_rank}</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>سال:</p>
            <p>{exchange.year_established}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeDetailes;

export async function getServerSideProps(context) {
  const { xid } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/exchanges/${xid}`);
  const data = await res.json();

  return {
    props: {
      exchange: data,
    },
  };
}
