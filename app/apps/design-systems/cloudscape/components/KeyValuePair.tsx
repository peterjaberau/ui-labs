import { ReactNode, FC } from 'react';
import Box from '@cloudscape-design/components/box';

export interface KeyValuePairProps {
  /** The property label */
  label: string;
  /** The property value. Empty value will be displayed as "-" (minus sign) */
  value?: ReactNode;
}

/**
 * A key/value pair represents a key followed by the corresponding value.
 */
const KeyValuePair: FC<KeyValuePairProps> = ({ label, value, ...props }) => {
  return (
    <div {...props}>
      <Box variant="awsui-key-label">{label}</Box>
      <Box>{!value ? '-' : value}</Box>
    </div>
  );
};

export default KeyValuePair;
