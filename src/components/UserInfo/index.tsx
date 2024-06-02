import Avatar from "@mui/material/Avatar";
import styles from './user-info.module.scss';

export default function UserInfo() {
  return (
    <section className={styles['user-info']}>
      <Avatar
        sx={{ width: 76, height: 70 }}
        alt="Michael Scott"
        src="/images/michael-scott.jpg"
      />
      <span>Michael Scott</span>
      <span className="small">michaelscoot@dundermifflin.com</span>
    </section>
  );
}
