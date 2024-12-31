import { ActionIcon } from '@lobehub/ui';
import { createStyles, useTheme } from "antd-style"
import { Users } from 'lucide-react';

const useStyles = createStyles(({ css, token }) => {
  return {
    icon: css`
      svg {
        fill: ${token.colorTextDescription};
      }

      &:hover {
        svg {
          fill: ${token.colorText};
        }
      }
    `,
  };
});

export default () => {
  const { styles } = useStyles();
  const theme = useTheme();
  return (
    <ActionIcon
      className={styles.icon}
      icon={Users}
      key="discord"
      title={'Community'}
      onClick={() => console.log('##')}
      style={{ border: `1px solid ${theme.colorFillSecondary}` }}
    />
  );
};
