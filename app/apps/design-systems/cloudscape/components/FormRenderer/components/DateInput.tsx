import { FC, memo } from 'react';
import DateInputComponent from '@cloudscape-design/components/date-input';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const DateInput: FC<DataDrivenFormFieldProps> = (props) => {
    const { input, onBlur, onFocus, ...rest } = props;
    return (
        <DateInputComponent
            {...rest}
            {...input}
            onChange={({ detail }) => input.onChange(detail.value)}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default memo(withDataDrivenFormField(DateInput));
