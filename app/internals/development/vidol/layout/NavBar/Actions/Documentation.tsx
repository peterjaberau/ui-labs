import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Book } from 'lucide-react';



const DOCUMENTS_REFER_URL = '#'

export const Documentation = () => {
  const theme = useTheme();
  return (
    <ActionIcon
      icon={Book}
      key="documentation"
      title={'Documentation'}
      onClick={() => window.open(DOCUMENTS_REFER_URL, '_blank')}
      style={{ border: `1px solid ${theme.colorFillSecondary}` }}
    />
  );
};

export default Documentation;
