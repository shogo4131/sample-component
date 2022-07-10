import type { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  loaderClassName?: string;
};

export const Loader: FC<Props> = ({ className, loaderClassName }) => {
  return (
    <div className={className}>
      <div className={clsx(styles.loader, loaderClassName)} />
    </div>
  );
};
