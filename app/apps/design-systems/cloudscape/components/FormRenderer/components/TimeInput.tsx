import { FC, memo } from 'react';
import TimeInputComponent from '@cloudscape-design/components/time-input';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const DEFAULT_FORMAT = 'hh:mm';
const DEFAULT_PLACEHOLDER = 'hh:mm';

const TimeInput: FC<DataDrivenFormFieldProps> = (props) => {
    const { input, onBlur, onFocus, ...rest } = props;

    return (
        <TimeInputComponent
            format={DEFAULT_FORMAT}
            placeholder={DEFAULT_PLACEHOLDER}
            {...rest}
            {...input}
            onChange={({ detail }) => input.onChange(detail.value)}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default memo(withDataDrivenFormField(TimeInput));
