import type { FC, ReactNode, ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

// NOTE: チームで色が決まっていれば全パターン作成して出しわけする
type Props = {
  className?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={clsx(styles.root, className)}>
      {children}
    </button>
  );
};
