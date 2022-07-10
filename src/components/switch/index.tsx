import type { FC, ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
} & ComponentProps<'input'>;

export const Switch: FC<Props> = ({ className, ...rest }) => {
  return (
    <label className={clsx(styles.root, className)}>
      <input type="checkbox" {...rest} className={styles.input} />
      <div className={styles.content} />
    </label>
  );
};
