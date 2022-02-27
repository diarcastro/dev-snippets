import { useCallback, useReducer } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import _forEach from 'lodash/forEach';
import _filter from 'lodash/filter';
import _every from 'lodash/every';
import _map from 'lodash/map';

import Header from '@molecules/Header';
import Container from '@atoms/Container';

import getSnippets from 'lib/getSnippets';
import Sidebar from '@molecules/Sidebar';
import {
  SnippetData,
  SnippetsActionType,
  SnippetsPageState,
  SnippetsPageStateAction, TagItem,
  TagsLike
} from 'interfaces/snippets';
import Snippet from '@templates/Snippet';

export interface HomeProps {
  snippets: SnippetData[];
}

const reducer = (state: SnippetsPageState, action: SnippetsPageStateAction) => {
  const {
    type,
    payload: {
      tag,
    } = {}
  } = action;

  const newState = { ...state };
  let filterSnippets = false;

  switch (type) {
    case SnippetsActionType.ADD_TAG: {
      if (tag) {
        const { activeTags: tags } = newState;
        tags.push(tag);
        newState.activeTags = tags;
        filterSnippets = true;
      }
      break;
    }
    case SnippetsActionType.REMOVE_TAG: {
      const { activeTags: tags } = newState;
      newState.activeTags = _filter(tags, (tagName) => tagName !== tag);
      filterSnippets = true;
      break;
    }
    case SnippetsActionType.RESET_TAGS: {
      newState.activeTags = [];
      filterSnippets = true;
      break;
    }
    default:
  }

  if (filterSnippets) {
    const {
      activeTags,
    } = newState;

    newState.filteredSnippets = _filter(state.snippets, ({ metadata }) => {
      const { tags } = metadata;
      return activeTags.length === 0 ? true : _every(activeTags, (tag) => tags.includes(tag));
    });
  }

  return { ...state, ...newState };
};

const initialState: SnippetsPageState = {
  snippets: [],
  filteredSnippets: [],
  activeTags: [],
};

const Home: NextPage<HomeProps> = ({ snippets }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, snippets, filteredSnippets: snippets });

  const {
    filteredSnippets,
    activeTags,
  } = state;


  const collectTags = useCallback(() => {
    let filteredTags: TagsLike = [];
    _forEach(snippets, ({ metadata }) => {
      const { tags } = metadata;
      filteredTags = [...new Set([...filteredTags, ...tags])];
    });

    return filteredTags;
  }, [snippets]);

  let allTags: TagsLike = collectTags();

  const tagItems: TagItem[] = _map(allTags, (tag) => {
    return {
      name: tag,
      active: activeTags.includes(tag),
    }
  });

  const onSelectedTagsChange = (tag: string | null, active: boolean = false) => {
    const type = tag
      ? active
        ? SnippetsActionType.ADD_TAG
        : SnippetsActionType.REMOVE_TAG
      : SnippetsActionType.RESET_TAGS;

    dispatch({ type, payload: { tag: tag || '' } })
  };

  return (
    <section className="font-sans">
      <Head>
        <title>Dev Snippets</title>
        <meta name="description" content="Dev Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Container className="md:flex gap-6 lg:gap-10">
          <article className="md:w-1/4 flex-none">
            <Sidebar tags={tagItems} onChange={onSelectedTagsChange} />
          </article>
          <article className="md:w-3/4">
            {
              filteredSnippets.length > 0 && filteredSnippets.map((snippet: SnippetData) => {
                const { metadata, slug, mdxSource } = snippet;

                return <Snippet
                  key={slug}
                  metadata={metadata}
                  mdxSource={mdxSource}
                />
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
