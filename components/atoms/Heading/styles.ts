import classNames from 'classnames';

import { ClassNameType } from 'interfaces/types';
import Sizes, { Size } from './enums';

const styles = {
  component: (className: ClassNameType, size: Sizes) => (classNames(
    'text-iceberg-900',
    'font-bold',
    'border-b',
    'p-2 md:p-4',
    'border-iceberg-900',
    {
      'my-6 text-4xl': size === Size.H1,
      'my-4 text-2xl': size === Size.H2,
      'my-2 text-xl': size === Size.H3,
    },
    className,
  )),
};

export default styles;
