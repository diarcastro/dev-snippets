import React from 'react';
import _isFunction from 'lodash/isFunction';

import Pill from '@atoms/Pill';

export interface SidebarProps {
  tags: Array<string>;
  onChange(tag: string | null): void;
}
const Sidebar = ({tags, onChange}: SidebarProps) => {
  const onClick = (tag: string | null) => {
    if (_isFunction(onChange)) {
      onChange(tag);
    }
  };
  return (
    <React.Fragment>
      <h2 className="text-xl font-bold my-4">Tags</h2>
      {
        tags.length > 0 && tags.map((tag: string) => (
          <button type="button" key={tag} className="block mb-4" onClick={() => onClick(tag)}>
            <Pill>{tag}</Pill>
          </button>
        ))
      }
      <button type="button" className="block mb-4" onClick={() => onClick(null)}>
        Reset
      </button>
    </React.Fragment>
  );
};

export default Sidebar;
