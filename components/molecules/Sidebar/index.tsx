import React from 'react';
import classNames from 'classnames';
import _isFunction from 'lodash/isFunction';

import Pill from '@atoms/Pill';
import { TagItem } from 'interfaces/snippets';
import { Heading } from '@atoms/Heading';

export interface SidebarProps {
  tags: TagItem[];

  onChange(tag: string | null, active: boolean): void;
}

const Sidebar = ({ tags, onChange }: SidebarProps) => {
  const onClick = (tag: string | null, active?: boolean) => {
    if (_isFunction(onChange)) {
      onChange(tag, active);
    }
  };

  const resetButtonClasses = classNames(
    'block',
    'mt-4',
    'p-3',
    'bg-pink-600',
    'text-white',
    'font-bold',
    'rounded-lg',
    'w-full',
    'transition-all',
    'hover:bg-pink-800',
  );
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

      <button
        type="button"
        className={resetButtonClasses} onClick={() => onClick(null)}>
        Clear filters
      </button>
    </aside>
  );
};

export default Sidebar;
