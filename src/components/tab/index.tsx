import type { ReactNode, FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type Props = {
  className?: string;
  headerClassName?: string;
  labelClassName?: string;
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
};

export const Tab: FC<Props> = ({
  className,
  headerClassName,
  labelClassName,
  tabs,
  activeId,
  onChange,
}) => {
  return (
    <div className={className}>
      <div role="tablist" className={headerClassName}>
        {tabs.map(({ id, label }) => (
          <button
            role="tab"
            key={id}
            tabIndex={0}
            aria-selected={id === activeId}
            className={clsx(styles.button, { [styles.label]: id === activeId }, labelClassName)}
            onClick={() => onChange(id)}
            onKeyDown={() => onChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs
        .filter(({ id }) => id === activeId)
        .map(({ id, content }) => (
          <div role="tabpanel" key={id} className={styles.content}>
            {content}
          </div>
        ))}
    </div>
  );
};
