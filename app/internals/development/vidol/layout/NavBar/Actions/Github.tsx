import * as LucideIcon from 'lucide-react';
import { ActionIcon } from '@lobehub/ui';
import { createStyles, useTheme } from 'antd-style';


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
  const theme = useTheme();

  const { styles } = useStyles();
  return (
    <ActionIcon
      className={styles.icon}
      icon={{ options: LucideIcon, value: 'folder-git' } as any}
      size={{ value: 'normal' } as any}
      key="github"
      title={'✨ Github'}
      onClick={() => window.open('https://github.com/lobehub/lobe-vidol', '_blank')}
      style={{ border: `1px solid ${theme.colorFillSecondary}` }}
    />
  );
};
