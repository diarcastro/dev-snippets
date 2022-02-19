import styles from './styles';
import { DefaultComponent } from 'interfaces/elements';

export interface ContainerProps extends DefaultComponent {
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={styles.component(className)}>
      <article className={styles.container}>
        {children}
      </article>
    </section>
  )
};

export default Container;
