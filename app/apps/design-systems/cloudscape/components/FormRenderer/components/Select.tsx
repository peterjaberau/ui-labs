import { FC, memo } from 'react';
import SelectComponent from '@cloudscape-design/components/select';
import Multiselect from '@cloudscape-design/components/multiselect';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import { Option } from '../types';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const AUTOSUGGEST_DEFAULT_EMPTY_MESSAGE = 'No matches found';

const Select: FC<DataDrivenFormFieldProps> = (props) => {
    const { options, input, isMulti, isSearchable, errorText, ...rest } = props;

    const baseComponentProps = {
        ...rest,
        ...input,
        options,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
    };

    return isMulti ? (
        <Multiselect
            {...baseComponentProps}
            selectedOptions={input.value || []}
            onChange={({ detail }) => input.onChange(detail.selectedOptions)}
        />
    ) : isSearchable ? (
        <Autosuggest
            empty={AUTOSUGGEST_DEFAULT_EMPTY_MESSAGE}
            enteredTextLabel={(value) => `Use: "${value}"`}
            {...baseComponentProps}
            value={input.value?.label || input.value?.value || ''}
            onChange={({ detail }) => {
                input.onChange({
                    value: detail.value,
                });
            }}
            onSelect={({ detail }) => {
                input.onChange(
                    options?.find((option: Option) => option.value === detail.value) || {
                        value: detail.value,
                    }
                );
            }}
        />
    ) : (
        <SelectComponent
            {...baseComponentProps}
            selectedOption={input.value}
            onChange={({ detail }) => input.onChange(detail.selectedOption)}
        />
    );
};

export default memo(withDataDrivenFormField(Select));
