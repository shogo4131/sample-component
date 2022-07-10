import type { MouseEventHandler, FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Position = 'top' | 'left' | 'right' | 'bottom';

type Items = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

type Props = {
  className?: string;
  itemClassName?: string;
  positions?: Position;
  items: Items[];
};

export const Balloon: FC<Props> = ({ className, itemClassName, positions = 'top', items }) => {
  return (
    <ul className={clsx(styles.root, styles[positions], className)}>
      {items.map(({ label, onClick }) => (
        <li key={label} className={clsx(styles.item, itemClassName)}>
          <button type="button" className={clsx(styles.button)} onClick={onClick}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};
