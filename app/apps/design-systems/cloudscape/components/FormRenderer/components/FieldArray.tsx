import { FC, memo, useMemo } from 'react';
import AttributeEditor from '@cloudscape-design/components/attribute-editor';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { FieldArray as FieldArrayBase } from '@data-driven-forms/react-form-renderer';
import { Field } from '../types';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

const DEFAULT_ADD_BUTTON_TEXT = 'Add new item';
const DEFAULT_REMOVE_BUTTON_TEXT = 'Remove';

const FieldArray: FC<DataDrivenFormFieldProps> = ({ ...props }) => {
    const { renderForm } = useFormApi();

    const {
        input,
        fields,
        isReadOnly,
        isDisabled,
        arrayValidator,
        maxItems = Number.MAX_SAFE_INTEGER,
        defaultItem,
        'data-testid': testId = 'field-array',
        controlId,
        showError,
        ...rest
    } = props;

    const definition = useMemo(() => {
        return fields.map((field: Field) => {
            const { label, name, ...fieldRest } = field;
            return {
                label: label,
                control: (_item: any, itemIndex: number) => {
                    return renderForm([
                        {
                            ...fieldRest,
                            isReadOnly,
                            isDisabled,
                            showError,
                            name: `${input.name}[${itemIndex}].${name}`,
                            'data-testid': `${testId}[${itemIndex}].${name}`,
                        },
                    ]);
                },
            };
        });
    }, [fields, renderForm, input.name, isReadOnly, isDisabled, testId, showError]);

    return (
        <FieldArrayBase key={controlId} name={controlId} validate={arrayValidator}>
            {({ fields }) => {
                const { length, push, remove } = fields;

                return (
                    <AttributeEditor
                        addButtonText={DEFAULT_ADD_BUTTON_TEXT}
                        removeButtonText={DEFAULT_REMOVE_BUTTON_TEXT}
                        disableAddButton={isDisabled || isReadOnly || (!!length && length >= maxItems)}
                        {...rest}
                        {...input}
                        isItemRemovable={() => {
                            return !isDisabled && !isReadOnly;
                        }}
                        items={input.value || []}
                        definition={definition}
                        onAddButtonClick={() => push(defaultItem || {})}
                        onRemoveButtonClick={({ detail: { itemIndex } }) => remove(itemIndex)}
                    />
                );
            }}
        </FieldArrayBase>
    );
};

export default memo(withDataDrivenFormField(FieldArray));
