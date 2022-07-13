---
name: 'component'
root: 'src'
output: './src/components'
ignore: []
questions:
  value: 'Please enter component name.'
---

# {{ inputs.name | pascal }}/index.tsx

```
import type { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {};

export const {{ inputs.name }}: FC<Props> = ({ className, loaderClassName }) => {
return (

  <div className={className}>
    <div className={clsx(styles.loader, loaderClassName)} />
  </div>
);
};
```
