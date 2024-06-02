import styles from './navigation-footer.module.scss';

export default function NavigationFooter() {
  return (
    <footer className={styles['footer']}>
      <nav>


        <a href="">Dunder Mifflin</a>
        <span> - 2024 &copy;</span>
      </nav>
    </footer>
  );
}
