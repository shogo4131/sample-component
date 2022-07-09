import type { VFC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

export type Props = {
  className?: string;
  loaderClassName?: string;
};

export const Loader: VFC<Props> = ({ className, loaderClassName }) => {
  return (
    <div className={className}>
      <div className={clsx(styles.loader, loaderClassName)} />
    </div>
  );
};
