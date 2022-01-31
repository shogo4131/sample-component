import type { VFC, ComponentProps, ChangeEventHandler } from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

export type Props = {
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
  horizontal?: boolean;
  label?: string;
  defaultValue?: string;
  error?: string;
} & Omit<ComponentProps<'textarea'>, 'defaultValue'>;

const LABEL_MARGIN = 20;

export const Textarea: VFC<Props> = ({
  className,
  textareaClassName,
  labelClassName,
  horizontal = false,
  label,
  defaultValue,
  maxLength,
  onChange,
  error,
  ...rest
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(defaultValue ?? '');
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    if (!spanRef.current) return;
    setMarginLeft(horizontal ? spanRef.current.clientWidth + LABEL_MARGIN : 0);
  }, [horizontal, spanRef]);

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  }, []);

  return (
    <label className={clsx(styles.root, className)}>
      <div className={clsx(styles.wrapper, { [styles.horizontal]: horizontal })}>
        {label && (
          <span
            ref={spanRef}
            className={clsx(styles.label, labelClassName)}
            style={{ marginRight: horizontal ? `${LABEL_MARGIN}px` : 'unset' }}
          >
            {label}
          </span>
        )}
        <div className={styles.inputWrapper}>
          <textarea
            {...rest}
            className={clsx(styles.textarea, textareaClassName)}
            value={value}
            maxLength={maxLength}
            onChange={onChangeHandler}
          ></textarea>
          {maxLength && <span className={styles.length}>{`${value.length}/${maxLength}`}</span>}
        </div>
      </div>
      {error && (
        <p className={styles.error} style={{ marginLeft }}>
          {error}
        </p>
      )}
    </label>
  );
};
