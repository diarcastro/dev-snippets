import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote';
import _forEach from 'lodash/forEach';

import Header from '@molecules/Header';
import Code from '@molecules/Code';
import Container from '@atoms/Container';
import Tags from '@molecules/Tags';

import getSnippets from 'lib/getSnippets';
import Sidebar from '@molecules/Sidebar';

export interface HomeProps {
  snippets: any;
}

const Home: NextPage<HomeProps> = ({ snippets }) => {
  const [currentSnippets, setSnippets ] = useState(snippets);

  let filteredTags:Array<string> = [];

  _forEach(currentSnippets, ({ frontMatter }) => {
    const { tags } = frontMatter;
    filteredTags = [...new Set([...filteredTags, ...tags])];
  });

  return (
    <section className="font-sans">
      <Head>
        <title>Dev Snippets</title>
        <meta name="description" content="Dev Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="md:flex gap-10">
          <article className="md:w-1/4">
            <Sidebar tags={filteredTags} onChange={() => {}} />
          </article>
          <article className="md:w-3/4">
            {
              currentSnippets.length > 0 && currentSnippets.map((snippet: any) => {
                const { frontMatter, slug, mdxSource } = snippet;
                const { title, tags } = frontMatter;

                return (
                  <article key={slug} className="pb-8">
                    <h2 className="text-2xl font-bold my-4">{title}</h2>
                    <Tags tags={tags} />
                    <MDXRemote {...mdxSource} components={{ Code }} />
                  </article>
                );
              })
            }
          </article>
        </Container>
      </main>

      <footer />
    </section>
  )
}

export const getStaticProps = async () => {
  const snippets = await getSnippets();

  return {
    props: {
      snippets,
    }
  };
}

export default Home
