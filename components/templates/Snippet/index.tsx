import React from 'react';

import { DefaultComponent } from 'interfaces/elements';
import Header from '@molecules/Header';
import classNames from 'classnames';

export interface SnippetProps extends DefaultComponent {

}

const Snippet = ({
                   children,
                   className
                 }: SnippetProps) => {
  const componentClasses = classNames(className);

  return (
    <React.Fragment>
      <Header />
      <main className={componentClasses}>{children}</main>
    </React.Fragment>
  )
};

export default Snippet;
