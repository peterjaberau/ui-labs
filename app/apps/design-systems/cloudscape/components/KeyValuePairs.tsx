import { FC } from 'react';
import ProgressBar, { ProgressBarProps } from '@cloudscape-design/components/progress-bar';
import SpaceBetween from '@cloudscape-design/components/space-between';
import KeyValuePair, { KeyValuePairProps } from './KeyValuePair';
import ColumnLayout from '@cloudscape-design/components/column-layout';

export interface KeyValuePairWithProgressBarProps
  extends Pick<ProgressBarProps, 'label' | 'description' | 'value' | 'additionalInfo'> {
  variant: 'key-value';
}

export interface KeyValuePairsProps {
  /** A list of key value pairs array. Each array will be displayed in a column.
   */
  items: (KeyValuePairProps | KeyValuePairWithProgressBarProps)[][];
}

/**
 * Key-value pairs are lists of properties (keys) followed by the corresponding value.
 */
const KeyValuePairs: FC<KeyValuePairsProps> = ({ items, ...props }) => {
  return (
    <div {...props}>
      <ColumnLayout columns={items.length} variant="text-grid">
        {items.map((keyValuePairArray, indexColumn) => (
          <SpaceBetween key={`column_${indexColumn}`} size="l">
            {keyValuePairArray.map((pair, index) =>
              'variant' in pair && pair.variant === 'key-value' ? (
                <ProgressBar
                  key={`column_${indexColumn}_item_${index}`}
                  {...(pair as KeyValuePairWithProgressBarProps)}
                />
              ) : (
                <KeyValuePair
                  key={`column_${indexColumn}_item_${index}`}
                  {...(pair as KeyValuePairProps)}
                />
              )
            )}
          </SpaceBetween>
        ))}
      </ColumnLayout>
    </div>
  );
};

export default KeyValuePairs;
