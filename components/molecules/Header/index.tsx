import Container from '@atoms/Container';

import styles from './styles';

const Header = () => {
  return (
    <header className={styles.component}>
      <Container>
        <h1 className={styles.title}>Dev Snippets</h1>
      </Container>
    </header>
  )
};

export default Header;
