import classNames from 'classnames';

const styles = {
  component: (active: boolean) => (classNames(
    'px-3',
    'py-1.5',
    'mr-2',
    'text-white',
    'rounded',
    'text-sm',
    {
      'bg-blue-500': !active,
      'bg-blue-800': active,
    },
  )),
};

export default styles;
