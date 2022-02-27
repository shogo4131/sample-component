import type { MouseEventHandler, VFC } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export type Items = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type Props = {
  className?: string;
  itemClassName?: string;
  items: Items[];
};

// TODO: 左右下のバージョンを作成する
export const Balloon: VFC<Props> = ({ className, itemClassName, items }) => {
  return (
    <ul className={clsx(styles.root, className)}>
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
