/* eslint-disable @next/next/no-img-element */
import { ActionIcon } from '@lobehub/ui';
import { Popover } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { Coffee } from 'lucide-react';
import React from 'react';

const useStyles = createStyles(({ token }) => ({
  supportContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  qrCode: {
    width: '200px',
    height: '200px',
  },
  kofiLink: {
    'color': token.colorPrimary,
    'textDecoration': 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Support: React.FC = () => {
  const { styles } = useStyles();
  const theme = useTheme();

  const content = (
    <div className={styles.supportContent}>
      <img
        className={styles.qrCode}
        src="https://r2.vidol.chat/common/wechat.jpg"
      />

    </div>
  );

  return (
    <Popover content={content} title='Support' trigger="hover" placement="right">
      <ActionIcon
        icon={Coffee}
        key="coffee"
        title={'Support'}
        style={{ border: `1px solid ${theme.colorFillSecondary}` }}
      />
    </Popover>
  );
};

export default Support;
