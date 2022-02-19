import classNames from 'classnames';
import { ClassNameType } from 'interfaces/types';

const styles = {
  component: (classNames(
    '',
  )),
  container: (className: ClassNameType) => classNames(
    'px-6 lg:px-10',
    'max-w-screen-2xl',
    'mx-auto',
    className,
  ),
};

export default styles;
