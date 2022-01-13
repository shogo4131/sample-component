import type { VFC, ComponentProps, ChangeEventHandler } from 'react';
import { useState, useCallback } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export type Props = {
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
  direction: 'vertical' | 'horizontal';
  label?: string;
  defaultValue?: string;
  error?: string;
} & Omit<ComponentProps<'textarea'>, 'defaultValue'>;

// TODO: エラーメッセージの位置をフィールドと合わせる
export const Textarea: VFC<Props> = ({
  className,
  textareaClassName,
  labelClassName,
  direction = 'vertical',
  label,
  defaultValue,
  maxLength,
  onChange,
  error,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue ?? '');

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      setValue(e.target.value);
      if (onChange) onChange(e);
    },
    []
  );

  return (
    <label className={clsx(styles.root, className)}>
      <div
        className={clsx(
          direction === 'vertical' ? styles.vertical : styles.horizontal
        )}
      >
        {label && (
          <span className={clsx(styles.label, labelClassName)}>{label}</span>
        )}
        <textarea
          {...rest}
          className={clsx(styles.textarea, textareaClassName)}
          value={value}
          maxLength={maxLength}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      {maxLength && (
        <span className={styles.length}>{`${value.length}/${maxLength}`}</span>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};
