import { Input } from "@mui/material";
import styles from "./search-bar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SearchBar() {
  return (
    <form className={styles["search-bar"]}>
      <SearchIcon />
      <input type="search" placeholder="Search by name, position" />
      <SettingsIcon />
      <span>Wed, Sep 09. 12:45</span>
    </form>
  );
}
