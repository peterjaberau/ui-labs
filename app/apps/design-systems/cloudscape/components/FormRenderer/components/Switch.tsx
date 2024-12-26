import { FC, memo } from 'react';
import Toggle from '@cloudscape-design/components/toggle';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const Switch: FC<DataDrivenFormFieldProps> = (props) => {
    const { label, description, input, onBlur, onFocus, ...rest } = props;

    return (
        <Toggle
            {...rest}
            {...input}
            description={description}
            checked={input.value || false}
            onChange={({ detail }) => input.onChange(detail.checked)}
            onBlur={onBlur}
            onFocus={onFocus}
        >
            {label}
        </Toggle>
    );
};

export default memo(withDataDrivenFormField(Switch, false, ['label', 'description', 'info']));
