import Link from "next/link";

import styles from "./page.module.scss";
import { Button, Card } from "@mui/material";
import Box, { CardType } from "@/components/Box";
import MyResponsiveBar from "@/components/Charts/Bar";

export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className={styles["grid-dashboard"]}>
        <section className={styles["section-dashboard"]}>
          <article className={styles["positions-info"]}>
            <Box classes={`${styles["box"]}`} status={CardType.DEFAULT}>
              <div className="info">
                <h3>Total Sales</h3>
                <span className="font-big">79</span>
              </div>
            </Box>
            <Box classes={styles["box"]} status={CardType.IN_PROGRESS}>
              <div className="info">
                <h3>Total Sales</h3>
                <span className="font-big">79</span>
              </div>
            </Box>
            <Box classes={styles["box"]} status={CardType.NEW_CLIENTS}>
              <div className="info">
                <h3>Total Sales</h3>
                <span className="font-big">79</span>
              </div>
            </Box>
            <Box classes={styles["box"]} status={CardType.FINISHED}>
              <div className="info">
                <h3>Total Sales</h3>
                <span className="font-big">79</span>
              </div>
            </Box>
          </article>
          <Box classes={`${styles["box"]} ${styles["column"]}`}>
            <h3>Vendas por Representante</h3>
            <div
              style={{
                height: "calc(100% - var(--padding) * 4)",
                width: "100%",
              }}
            >
              <MyResponsiveBar />
            </div>
          </Box>
        </section>
        <section className="grid-3">
          <Box classes={`${styles["box"]}`}>
            <h3>Vendas por etapa</h3>
          </Box>
          <Box classes={`${styles["box"]}`}>
            <h3>Negócios Recentes</h3>
          </Box>
          <Box classes={`${styles["box"]}`}>
            <h3>Atividades Recentes</h3>
          </Box>
        </section>
        <section className="grid-2">
          <Box classes={`${styles["box"]}`}>
            <h3>Leads</h3>
          </Box>
          <Box classes={`${styles["box"]}`}>
            <h3>MEta 2024</h3>
          </Box>
        </section>
      </div>
    </>
  );
}
