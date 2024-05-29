import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Home Page</h2>
      <Link href={'/sales'}>Sales</Link>
      <Button variant="contained">Homepage</Button>
    </main>
  );
}
