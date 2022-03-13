import type { VFC, ReactNode } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import DeleteIcon from '@/public/delete.svg';
import styles from './index.module.css';

export type Props = {
  className?: string;
  textClassName?: string;
  buttonClassName?: string;
  children: ReactNode;
  onClick: () => void;
};

// NOTE: アイコンは各案件に合わせてpropsでtypeを設定して出しわけする
export const ChipButton: VFC<Props> = ({
  className,
  textClassName,
  buttonClassName,
  children,
  onClick,
}) => {
  return (
    <button type="button" className={clsx(styles.root, className)} onClick={onClick}>
      <span className={clsx(styles.chipText, textClassName)}>{children}</span>
      <span className={clsx(styles.button, buttonClassName)}>
        <Image alt="delete" src={DeleteIcon} />
      </span>
    </button>
  );
};
