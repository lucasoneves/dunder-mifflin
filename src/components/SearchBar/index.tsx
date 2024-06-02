import { Input } from '@mui/material';
import styles from './search-bar.module.scss';


export default function SearchBar() {
  return <form className={styles['search-bar']}>
    <Input />
  </form>
}