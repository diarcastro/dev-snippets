import Container from '@atoms/Container';

import GithubIcon from 'bootstrap-icons/icons/github.svg';

import styles from './styles';

const Header = () => {
  return (
    <header className={styles.component}>
      <Container className="flex justify-between">
        <h1 className={styles.title}>
          <span className="text-manhattan-700 text-sm align-middle">&lt;/&gt;</span>
          <span className="ml-2 text-iceberg-900">D</span>
          <span>ev</span>
          <span className="ml-2 text-pink-800">S</span>
          <span>nippets</span>
          <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-sand-800" />
          <div className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-coldPurple-800" />
          <div className="absolute -bottom-2.5 left-0 w-full h-0.5 bg-iceberg-800" />
        </h1>
        <a
          href="https://github.com/diarcastro/dev-snippets"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center font-bold text-sm"
        >
          <GithubIcon className="mr-1.5" />
          Github
        </a>
      </Container>
    </header>
  )
};

export default Header;
