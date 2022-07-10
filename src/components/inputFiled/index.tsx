import type { FC, ComponentProps, ChangeEventHandler } from 'react';
import { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

// TODO: iconがあった時の処理
type Props = {
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  error?: string;
  horizontal?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & Omit<ComponentProps<'input'>, 'onChange'>;

const LABEL_MARGIN = 20;

export const InputFiled: FC<Props> = ({
  className,
  labelClassName,
  wrapperClassName,
  inputClassName,
  label,
  horizontal = false,
  error,
  onChange,
  ...rest
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    if (!spanRef.current) return;
    setMarginLeft(horizontal ? spanRef.current.clientWidth + LABEL_MARGIN : 0);
  }, [horizontal, spanRef]);

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
        <div className={clsx(styles.inputWrapper, wrapperClassName)}>
          <input {...rest} className={clsx(styles.input, inputClassName)} onChange={onChange} />
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
