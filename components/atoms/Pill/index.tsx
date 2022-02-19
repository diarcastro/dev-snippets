import { WithChildren } from 'interfaces/elements';

const Pill = ({ children }: WithChildren ) => (
  <span className="px-3 py-1.5 mr-2 bg-blue-500 text-white rounded text-sm">{children}</span>
);

export default Pill;
