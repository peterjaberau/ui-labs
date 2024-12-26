import { FC, memo } from 'react';
import TextareaComponent from '@cloudscape-design/components/textarea';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const Textarea: FC<DataDrivenFormFieldProps> = (props) => {
    const { input, onBlur, onFocus, ...rest } = props;

    return (
        <TextareaComponent
            {...rest}
            {...input}
            onChange={({ detail }) => input.onChange(detail.value)}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};

export default memo(withDataDrivenFormField(Textarea));
