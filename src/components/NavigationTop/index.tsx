import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-menu.module.scss";

export default function NavigationTop() {
  return (
    <header>
      <nav className={styles["nav-menu"]}>
        <Link href={"/"}>
          <Image
            src={"/images/dunder-mifflin-logo.png"}
            alt="Dunder Mifflin"
            width={80}
            height={50}
          />
        </Link>
        <ul className={styles["list-links"]}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/clients"}>Clients</Link>
          </li>
          <li>
            <Link href={"/sellers"}>Sellers</Link>
          </li>
          <li>
            <Link href={"/sales"}>Sales</Link>
          </li>
        </ul>
        <Avatar alt="Michael Scott" src="/images/michael-scott.jpg" />
      </nav>
    </header>
  );
}
