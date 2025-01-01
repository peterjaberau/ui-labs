import React, { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { DraggablePanelFooterProps } from './helpers/types.ts';
import { usePanelInnerStyles } from './helpers/style.ts';

const DraggablePanelFooter = memo<DraggablePanelFooterProps>(({ className, ...rest }: any) => {
  const { cx, styles } = usePanelInnerStyles();
  return (
    <Flexbox
      align={'center'}
      className={cx(styles.footer, className)}
      flex={'none'}
      gap={8}
      horizontal
      justify={'flex-start'}
      {...rest}
    />
  );
});

export default DraggablePanelFooter;
