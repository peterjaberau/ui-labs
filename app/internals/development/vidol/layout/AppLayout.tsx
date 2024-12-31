import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import NavBar from './NavBar';



const AppLayout = memo(({ children }: any) => {
  return (
    <Flexbox width={'100%'} style={{ height: '100%' }} horizontal>
      <NavBar />
      <Flexbox flex={1} height={'100%'} width={'100%'}>
        {children}
      </Flexbox>
    </Flexbox>
  );
});

export default AppLayout;
