import React from 'react';
import _isFunction from 'lodash/isFunction';

import Pill from '@atoms/Pill';
import { TagItem } from 'interfaces/snippets';

export interface SidebarProps {
  tags: TagItem[];
  onChange(tag: string | null, active: boolean): void;
}
const Sidebar = ({tags, onChange}: SidebarProps) => {
  const onClick = (tag: string | null, active?: boolean) => {
    if (_isFunction(onChange)) {
      onChange(tag, active);
    }
  };
  return (
    <React.Fragment>
      <h2 className="text-xl font-bold my-4">Tags</h2>
      {
        tags.length > 0 && tags.map(({ name, active }: TagItem) => (
          <button type="button" key={name} className="mb-4" onClick={() => onClick(name, !active)}>
            <Pill active={active}>{name}</Pill>
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
