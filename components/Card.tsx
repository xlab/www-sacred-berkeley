import styles from '@components/Card.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string | any;
}

const Card: React.FC<CardProps> = ({ children, title, ...rest }) => {
  return (
    <article className={styles.card}>
      {Utilities.isEmpty(title) ? null : (
        <header className={styles.action}>
          <div className={styles.left} aria-hidden="true"></div>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.right} aria-hidden="true"></div>
        </header>
      )}
      <section className={styles.children}>{children}</section>
    </article>
  );
};

export default Card;
