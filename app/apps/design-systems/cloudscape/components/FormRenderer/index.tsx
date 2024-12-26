import { FC } from 'react';
import {
    FormRenderer as ReactFormRenderer,
    FormRendererProps as ReactFormRendererProps,
} from '@data-driven-forms/react-form-renderer';
import { FormSubscription as ReactFormSubscription } from 'final-form';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
import { ValidatorMapper } from '@data-driven-forms/react-form-renderer/validator-mapper';
import { componentTypes, Schema } from './types';
import { FormRendererContext } from './formRendererContext';
import basicComponentMapper from './componentMapper';
import FormTemplate from './components/FormTemplate';

export interface FormRendererProps {
    /** A schema which defines structure of the form. */
    schema: Schema;
    /** An object of fields names as keys and values as their values. */
    initialValues?: Record<string, any>;
    /** A submit callback which receives two arguments: values and formApi. */
    onSubmit: ReactFormRendererProps['onSubmit'];
    /** A cancel callback, which receives values as the first argument. */
    onCancel?: () => void;
    /** When true, the submit button is disabled with a loading spinner */
    isSubmitting?: boolean;
    /** Specifies a form-level validation message */
    errorText?: string;
    /** The subscription for the formstate change so the form is rerendered each time the subscription value changed*/
    subscription?: ReactFormSubscription;
    /** Custom component wrappers*/
    customComponentWrapper?: {
        [key: string]: React.ComponentType | React.FunctionComponent | React.ElementType;
    };
    /** Custom validator mapper */
    validatorMapper?: ValidatorMapper;
    /**
     * Record level validation enables you to create validation function for whole form. It is useful for some cross validation between multiple fields etc
     */
    validate?: ReactFormRendererProps['validate'];
}

/**
 * FormRenderer converts JSON form definitions into fully functional React forms.
 * <br/>
 * It leverages [Data Driven Form](https://data-driven-forms.org/) with customer component mappings to use Cloudscape form controls.
 */
const FormRenderer: FC<FormRendererProps> = ({
    schema,
    validatorMapper,
    onSubmit,
    onCancel,
    isSubmitting,
    errorText,
    initialValues,
    subscription,
    customComponentWrapper,
    ...rest
}) => {
    return (
        <FormRendererContext.Provider value={{ isSubmitting, errorText }}>
            <ReactFormRenderer
                {...rest}
                componentMapper={{ ...basicComponentMapper, ...customComponentWrapper }}
                FormTemplate={FormTemplate}
                validatorMapper={validatorMapper}
                schema={schema}
                onSubmit={onSubmit}
                onCancel={onCancel}
                subscription={subscription}
                initialValues={initialValues}
            />
        </FormRendererContext.Provider>
    );
};

export default FormRenderer;

export { componentTypes, validatorTypes };
export type { ValidatorMapper, Schema };
export type { Field } from '@data-driven-forms/react-form-renderer/common-types';
export type { FieldInputProps } from 'react-final-form';
