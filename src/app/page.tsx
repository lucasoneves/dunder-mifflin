import Link from "next/link";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import Box from "@/components/Box";

export default function Home() {
  return (
    <>
      <h2>Dashboard</h2>
      <div className={styles["grid-dashboard"]}>
        <section className={styles["section-dashboard"]}>
          <article className={styles['positions-info']}>
            <Box classes={`${styles["box"]}`}>
              <span className="divider"></span>
              <div className="info">
                <span>79</span>
                <h3>Total Sales</h3>
              </div>
            </Box>
            <Box classes={`${styles["box"]}`}>
              <span className="divider"></span>
              <div className="info">
                <span>79</span>
                <h3>In progress</h3>
              </div>
            </Box>
            <Box classes={`${styles["box"]}`}>
              <span className="divider"></span>
              <div className="info">
                <span>79</span>
                <h3>Finished</h3>
              </div>
            </Box>
            <Box classes={`${styles["box"]}`}>
              <span className="divider"></span>
              <div className="info">
                <span>79</span>
                <h3>New Clients</h3>
              </div>
            </Box>
          </article>
          <Box classes={`${styles["box"]}`}>
            <h3>Top Sales</h3>
          </Box>
        </section>
        <section className={styles["employers-applications"]}>
          <Box classes={`${styles["box"]}`}>
            <h3>Employer by Department</h3>
          </Box>
          <Box classes={`${styles["box"]}`}>
            <h3>Recent Application</h3>
          </Box>
        </section>
      </div>
    </>
  );
}
