/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FC, ReactNode } from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import DeleteIcon from '@/public/delete.svg';

import styles from './index.module.css';

type Props = {
  className?: string;
  textClassName?: string;
  buttonClassName?: string;
  children: ReactNode;
  onClick: () => void;
};

// NOTE: アイコンは各案件に合わせてpropsでtypeを設定して出しわけする
export const ChipButton: FC<Props> = ({
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
