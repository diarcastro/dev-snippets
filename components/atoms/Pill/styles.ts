import classNames from 'classnames';

const styles = {
  component: (active: boolean, hover: boolean = false) => (classNames(
    'px-3',
    'py-1.5',
    'mr-2',
    'text-white',
    'rounded',
    'text-sm',
    'transition-all',
    {
      'bg-iceberg-800': !active,
      'bg-coldPurple-700': active,
      'hover:bg-manhattan-700': hover,
    },
  )),
};

export default styles;
