import { WithChildren } from 'interfaces/elements';
import styles from './styles';

export interface PillProps extends WithChildren {
  active?: boolean;
}

const Pill = ({ active = false, children }: PillProps) => (
  <span className={styles.component(active)}>{children}</span>
);

export default Pill;
