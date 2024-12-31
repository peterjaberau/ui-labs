import React, { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { DraggablePanelBodyProps } from './types.ts';
import { usePanelInnerStyles } from './style.ts';

const DraggablePanelBody = memo<DraggablePanelBodyProps>(({ className, ...rest }) => {
  const { cx, styles } = usePanelInnerStyles();
  return <Flexbox className={cx(styles.body, className)} flex={1} {...rest} />;
});

export default DraggablePanelBody;
