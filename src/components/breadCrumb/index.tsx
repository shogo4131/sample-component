/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { VFC } from 'react';
import { Fragment, useCallback } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import ArrowRightIcon from '@/public/arrow-right.svg';

import styles from './index.module.css';

export type Props = {
  className?: string;
  items: Crumbs[];
};

type Crumbs = {
  id: number;
  label: string;
  href?: string;
};

export const BreadCrumb: VFC<Props> = ({ className, items }) => {
  const { push } = useRouter();

  const onClickLinkHandler = useCallback(
    (url: string | undefined) => {
      if (url) push(url);
    },
    [push]
  );

  return (
    <div className={clsx(styles.root, className)}>
      {items.map(({ id, href, label }) => (
        <Fragment key={id}>
          <div className={clsx({ [styles.label]: href })} onClick={() => onClickLinkHandler(href)}>
            {label}
          </div>
          {href && <Image alt="arrow-right" src={ArrowRightIcon} className={styles.icon} />}
        </Fragment>
      ))}
    </div>
  );
};
