import { ReactNode } from 'react';
import { ClassNameType } from './types';

export type Children = ReactNode | JSX.Element | JSX.Element[] | string | number | null;

export interface WithChildren {
  children?: Children;
}

export interface WithClassName {
  className?: ClassNameType;
}

export interface DefaultComponent extends WithChildren, WithClassName{
}
