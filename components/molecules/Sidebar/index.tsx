import React from 'react';
import _isFunction from 'lodash/isFunction';

import Pill from '@atoms/Pill';
import { TagItem } from 'interfaces/snippets';
import { Heading } from '@atoms/Heading';

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
    <aside className="sticky top-32">
      <Heading>Tags</Heading>
      {
        tags.length > 0 && tags.map(({ name, active }: TagItem) => (
          <button type="button" key={name} className="mb-4" onClick={() => onClick(name, !active)}>
            <Pill active={active} hover>{name}</Pill>
          </button>
        ))
      }
      <button type="button" className="block mb-4" onClick={() => onClick(null)}>
        Reset
      </button>
    </aside>
  );
};

export default Sidebar;
