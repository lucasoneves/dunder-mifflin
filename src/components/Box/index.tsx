import styles from "./box.module.scss";
import { StatusColors } from "@/types/StatusColors";

export enum CardType {
  DEFAULT = StatusColors.SUCCESS,
  IN_PROGRESS = StatusColors.PENDING,
  NEW_CLIENTS = StatusColors.DEFAULT,
  FINISHED = StatusColors.ERROR
}

export default function Box({
  children,
  classes,
  status,
}: {
  children: React.ReactNode;
  classes: string;
  status?: CardType
}) {
  return (
    <div className={`${styles["box"]} ${[classes]}`}>
      {status && <span className={`${styles['divider']}`} style={{backgroundColor: status}}></span>}
      {children}
    </div>
  );
}
