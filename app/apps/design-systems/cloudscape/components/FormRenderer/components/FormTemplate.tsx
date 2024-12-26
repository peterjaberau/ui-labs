import { FC, memo, useMemo } from 'react';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import { RenderProps, componentTypes } from '../types';
import { useFormRendererContext } from '../formRendererContext';
import FormHeader from './FormHeader';

const FormTemplate: FC<RenderProps> = ({ formFields, schema }) => {
    const { handleSubmit, onCancel, onReset } = useFormApi();
    const {
        cancelLabel = 'Cancel',
        canCancel = true,
        submitLabel = 'Submit',
        resetLabel = 'Reset',
        canReset = false,
        fields,

        variant,

        header,
        headerVariant = 'h1',
        info,
        description,

        ...rest
    }: any = schema;
    const { isSubmitting, errorText } = useFormRendererContext();

    const actions = (
        <SpaceBetween direction="horizontal" size="xs">
            {canCancel && (
                <Button variant="link" onClick={onCancel} disabled={isSubmitting}>
                    {cancelLabel}
                </Button>
            )}
            {canReset && (
                <Button variant="normal" onClick={onReset} disabled={isSubmitting}>
                    {resetLabel}
                </Button>
            )}
            <Button
                variant="primary"
                loading={isSubmitting}
                onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
            >
                {submitLabel}
            </Button>
        </SpaceBetween>
    );

    const actionsVisible = useMemo(() => {
        return !(fields.length > 0 && fields[0].component === componentTypes.WIZARD);
    }, [fields]);

    const testId: any = rest['data-testid'] || 'form-renderer' as any;

    const containerWrappered = useMemo(() => {
        if (variant === 'embedded') {
            return false;
        }

        if (!formFields || formFields.length === 0) {
            return false;
        }

        const componentType = formFields[0].props.component;

        if ([componentTypes.SUB_FORM, componentTypes.WIZARD].includes(componentType)) {
            return false;
        }

        return !(componentType === componentTypes.EXPANDABLE_SECTION && formFields[0].props.variant === 'container');
    }, [variant, formFields]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Form
                variant={variant}
                header={
                    <FormHeader header={header} description={description} headerVariant={headerVariant} info={info} />
                }
                actions={actionsVisible ? actions : undefined}
                data-testid={testId}
                errorText={errorText}
            >
                {containerWrappered ? (
                    <Container>
                        <SpaceBetween direction="vertical" size="s">
                            {formFields}
                        </SpaceBetween>
                    </Container>
                ) : (
                    <SpaceBetween direction="vertical" size="s">
                        {formFields}
                    </SpaceBetween>
                )}
            </Form>
        </form>
    );
};

export default memo(FormTemplate);
