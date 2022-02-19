import type { NextPage } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote';

import Header from '@molecules/Header';
import Code from '@molecules/Code';
import Container from '@atoms/Container';
import getSnippets from 'lib/getSnippets';

export interface HomeProps {
  snippets: any;
}

const Home: NextPage<HomeProps> = ({ snippets }) => {
  return (
    <section className="font-sans">
      <Head>
        <title>Dev Snippets</title>
        <meta name="description" content="Dev Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container>
          {
            snippets.length > 0 && snippets.map((snippet: any) => {
              const { frontMatter, slug, mdxSource } = snippet;
              const { title, tags } = frontMatter;

              return (
                <article key={slug} className="pb-8">
                  <h2 className="text-2xl font-bold my-4">{title}</h2>
                  <div className="my-4">
                    {
                      tags.length > 0 && tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1.5 mr-2 bg-blue-500 text-white rounded text-sm">{tag}</span>
                      ))
                    }
                  </div>
                  <MDXRemote {...mdxSource} components={{ Code }} />
                </article>
              );
            })
          }
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
