import type { VFC, ReactNode, ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

// NOTE: チームで色が決まっていれば全パターン作成して出しわけする
export type Props = {
  className?: string;
  children: ReactNode;
} & ComponentProps<'button'>;

export const Button: VFC<Props> = ({ className, children, ...rest }) => {
  return (
    <button type="button" {...rest} className={clsx(styles.root, className)}>
      {children}
    </button>
  );
};
