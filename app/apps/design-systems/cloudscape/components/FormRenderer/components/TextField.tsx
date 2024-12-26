import { FC, memo } from 'react';
import Input, { InputProps } from '@cloudscape-design/components/input';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const TextField: FC<DataDrivenFormFieldProps> = (props) => {
    const { type, input, onBlur, onFocus, ...rest } = props;

    return (
        <Input
            {...rest}
            {...input}
            type={(type as InputProps.Type) || 'text'}
            onChange={({ detail }) => input.onChange(detail.value)}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default memo(withDataDrivenFormField(TextField));
