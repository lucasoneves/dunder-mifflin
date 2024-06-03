import styles from "./box.module.scss";

export default function Box({ children, classes }: { children: React.ReactNode, classes: string }) {
  return <div className={`${styles['box']} ${[classes]}`}>{children}</div>;
}
