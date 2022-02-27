import { WithChildren } from 'interfaces/elements';
import styles from './styles';

export interface PillProps extends WithChildren {
  active?: boolean;
  hover?: boolean;
}

const Pill = ({ active = false, hover = false, children }: PillProps) => (
  <span className={styles.component(active, hover)}>{children}</span>
);

export default Pill;
