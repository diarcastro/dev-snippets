import { DefaultComponent } from 'interfaces/elements';
import styles from './styles';
import Size from './enums';

export interface HeadingProps extends DefaultComponent {
  size?: Size,
}

const Heading = ({
                   size = Size.H2,
                   className,
                   children
                 }: HeadingProps) => {
  const componentClasses = styles.component(className, size);

  switch (size) {
    case Size.H1:
      return <h1 className={componentClasses}>{children}</h1>
    case Size.H2:
    default:
      return <h2 className={componentClasses}>{children}</h2>
  }
};

export default Heading;
