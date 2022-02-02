import type { VFC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowIcon from '../../../public/arrow-down-gray.svg';
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
  options: Option[];
  selectedOptions?: Option;
  onSelect: (option: Option) => void;
};

// TODO: 上に表示されるバージョンを追加
export const Pulldown: VFC<Props> = ({
  className,
  titleClassName,
  inputClassName,
  optionsClassName,
  optionClassName,
  title,
  options,
  selectedOptions,
  onSelect,
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {title && <span className={clsx(titleClassName)}>{title}</span>}
      <input
        type="text"
        value={selectedOptions?.label ?? ''}
        className={clsx(styles.input, inputClassName)}
        readOnly
      />
      <div className={styles.arrowIcon}>
        <Image alt="arrow" src={ArrowIcon} layout="fill" className={styles.icon} />
      </div>
      <div className={styles.selectWrapper}>
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
