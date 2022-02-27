import React from 'react';
import classNames from 'classnames';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { MDXRemote } from 'next-mdx-remote';

import { Heading } from '@atoms/Heading';
import Tags from '@molecules/Tags';
import Code from '@molecules/Code';
import { SnippetMetadata } from 'interfaces/snippets';
import { WithClassName } from 'interfaces/elements';

export interface SnippetProps extends WithClassName {
  metadata: SnippetMetadata;
  mdxSource: MDXRemoteSerializeResult;
}

const Snippet = ({
                   metadata,
                   mdxSource,
                   className
                 }: SnippetProps) => {
  const componentClasses = classNames(
    'snippet',
    'pb-8',
    className,
  );
  const {
    title,
    date,
    tags,
  } = metadata;

  return (
    <article className={componentClasses}>
      <Heading className="flex flex-wrap items-center justify-between gap-4">
        {title}
        <small className="text-xs font-normal bg-coldPurple-300 rounded inline-block px-2 py-2 text-coldPurple-900">{date}</small>
      </Heading>
      <Tags tags={tags} />
      <MDXRemote {...mdxSource} components={{ Code }} />
    </article>
  )
};

export default Snippet;
