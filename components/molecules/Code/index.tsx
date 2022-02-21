import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { WithChildren } from 'interfaces/elements';

export interface CodeProps extends WithChildren {
  language: string;
}
const Code = ({ language = 'javascript', children}: CodeProps) => {
  return (
    <article className="my-6 rounded-md overflow-hidden">
      <SyntaxHighlighter language={language} style={nightOwl}>
        {children}
      </SyntaxHighlighter>
    </article>
  );
};

export default Code;
