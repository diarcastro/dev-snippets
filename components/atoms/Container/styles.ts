import classNames from 'classnames';
import { ClassNameType } from 'interfaces/types';

const styles = {
  component: (className: ClassNameType) => (classNames(
    className,
  )),
  container: classNames(
    'px-6 lg:px-10',
    'max-w-screen-2xl',
    'mx-auto',
  ),
};

export default styles;
