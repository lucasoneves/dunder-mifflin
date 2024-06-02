import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Image from "next/image";
import styles from "./nav-menu.module.scss";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NavigationFooter from "../NavigationFooter";
import UserInfo from "../UserInfo";

export default function MenuSidebar() {
  return (
    <aside className={styles['sidebar']}>
        <nav className={styles["nav-menu"]}>
          <Link href={"/"}>
            <Image
              src={"/images/dunder-mifflin-logo.png"}
              alt="Dunder Mifflin"
              width={80}
              height={50}
            />
          </Link>
          <UserInfo />
          <ul className={styles["list-links"]}>
            <li>
              <Link href={"/"}><InsertChartOutlinedIcon/> Dashboard</Link>
            </li>
            <li>
              <Link href={"/clients"}><StoreOutlinedIcon />Clients</Link>
            </li>
            <li>
              <Link href={"/sellers"}><AccountBoxOutlinedIcon />Sellers</Link>
            </li>
            <li>
              <Link href={"/sales"}><MonetizationOnOutlinedIcon />Sales</Link>
            </li>
          </ul>
        </nav>
      <NavigationFooter />
    </aside>
  );
}
