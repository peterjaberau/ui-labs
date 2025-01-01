import React, { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { DraggablePanelContainerProps } from './helpers/types.ts';
import { usePanelInnerStyles } from './helpers/style.ts';

const DraggablePanelContainer = memo<DraggablePanelContainerProps>(({ className, ...rest }: any) => {
  const { cx, styles } = usePanelInnerStyles();
  return <Flexbox className={cx(styles.container, className)} {...rest} />;
});

export default DraggablePanelContainer;
