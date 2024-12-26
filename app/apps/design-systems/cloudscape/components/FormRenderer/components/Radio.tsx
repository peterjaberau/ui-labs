import { FC, memo } from 'react';
import RadioGroup from '@cloudscape-design/components/radio-group';
import { Option } from '../types';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const Radio: FC<DataDrivenFormFieldProps> = (props) => {
    const { options, input, isRequired, isDisabled, ...rest } = props;

    return (
        <RadioGroup
            {...rest}
            {...input}
            items={options?.map((option: Option) => ({
                ...option,
                disabled: option.disabled ?? isDisabled,
                controlId: `${input.name}-${option.value}`,
            }))}
            ariaRequired={isRequired}
            value={input.value}
            onChange={({ detail }) => {
                input.onChange(detail.value);
            }}
        />
    );
};

export default memo(withDataDrivenFormField(Radio, true));
