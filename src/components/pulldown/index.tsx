import type { VFC } from 'react';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowIcon from '@/public/arrow-down-gray.svg';
import styles from './index.module.css';

export type Option = {
  label: string;
  value: string | number;
};

export type Props = {
  className?: string;
  titleClassName?: string;
  inputClassName?: string;
  optionsClassName?: string;
  optionClassName?: string;
  title?: string;
  direction?: 'up' | 'down';
  gap?: string;
  options: Option[];
  selectedOptions?: Option;
  onSelect: (option: Option) => void;
};

export const Pulldown: VFC<Props> = ({
  className,
  titleClassName,
  inputClassName,
  optionsClassName,
  optionClassName,
  title,
  direction = 'down',
  gap = '5px',
  options,
  selectedOptions,
  onSelect,
}) => {
  const [height, setHeight] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setHeight(inputRef.current?.clientHeight ?? 0), []);

  return (
    <div className={clsx(styles.root, className)}>
      {title && <span className={clsx(titleClassName)}>{title}</span>}
      <input
        ref={inputRef}
        type="text"
        value={selectedOptions?.label ?? ''}
        className={clsx(styles.input, inputClassName)}
        readOnly
      />
      <div className={styles.arrowIcon}>
        <Image alt="arrow" src={ArrowIcon} layout="fill" className={styles.icon} />
      </div>
      <div
        className={styles.selectWrapper}
        style={
          direction === 'up'
            ? { paddingBottom: gap, bottom: `${height ?? 0}px` }
            : { paddingTop: gap }
        }
      >
        <ul className={clsx(styles.list, optionsClassName)}>
          {options.map(({ label, value }) => (
            <li
              key={label}
              role="option"
              tabIndex={0}
              onClick={() => onSelect({ label, value })}
              className={clsx(styles.option, optionClassName)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
