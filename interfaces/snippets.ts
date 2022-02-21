import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export type TagsLike = Array<string>;

export interface SnippetMetadata {
  title: string;
  date: string;
  description: string;
  tags: TagsLike;
  keywords?: TagsLike;
}

export interface SnippetData {
  metadata: SnippetMetadata;
  mdxSource: MDXRemoteSerializeResult;
  slug?: string;
}

export interface SnippetsPageState {
  snippets: SnippetData[],
  filteredSnippets: SnippetData[],
  activeTags: TagsLike,
}

export enum SnippetsActionType {
  ADD_TAG = 'ADD_TAG',
  REMOVE_TAG = 'REMOVE_TAG',
  RESET_TAGS = 'RESET_TAGS',
}

export interface SnippetsPayload {
  snippets?: SnippetData[];
  tag?: string;
}

export interface SnippetsPageStateAction {
  type: SnippetsActionType,
  payload: SnippetsPayload;
}

export interface TagItem {
  name: string;
  active: boolean;
}
