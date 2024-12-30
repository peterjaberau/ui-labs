import React, { ReactNode } from 'react';
import { useTheme } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const AppShell = ({ children, header }: { children?: ReactNode; header?: ReactNode }) => {
  const theme = useTheme();

  return (
    <>
      <Flexbox
        direction={'vertical'}
        height={'100%'}
        width={'100%'}
        style={{ position: 'relative' }}
      >
        {header}
        <Flexbox
          direction={'horizontal'}
          width={'100%'}
          height={'100%'}
          style={{ maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}
        >

          { children }


        </Flexbox>
      </Flexbox>
    </>
  );
};

AppShell.displayName = 'AppShell';
export default AppShell;
