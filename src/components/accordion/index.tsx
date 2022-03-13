import type { VFC, ReactNode } from 'react';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowDownIcon from '@/public/arrow-down-gray.svg';
import styles from './index.module.css';

export type Props = {
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  header: ReactNode;
  children: ReactNode;
};

export const Accordion: VFC<Props> = ({
  className,
  headerClassName,
  contentClassName,
  header,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const onClickHandler = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className={clsx(styles.root, className)}>
      <div className={clsx(styles.header, headerClassName)}>
        {header}
        <Image
          alt="arrow-down"
          src={ArrowDownIcon}
          className={clsx(styles.icon, { [styles.activeIcon]: open })}
          onClick={onClickHandler}
        />
      </div>
      <div
        className={clsx(styles.content, contentClassName, {
          [styles.active]: open,
        })}
      >
        {children}
      </div>
    </div>
  );
};
