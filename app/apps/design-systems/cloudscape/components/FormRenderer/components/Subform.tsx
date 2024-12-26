import { FC, memo } from 'react';
import { Field } from '@data-driven-forms/react-form-renderer';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import FormHeader, { FormHeaderProps } from './FormHeader';

export interface SubformProps {
    fields: Field[];
    title: string;
    description?: string;
    headerVariant?: FormHeaderProps['headerVariant'];
    isReadOnly?: boolean;
    isDisabled?: boolean;
}

const Subform: FC<SubformProps> = ({ title, description, headerVariant, fields, isReadOnly, isDisabled, ...props }: any) => {
    const { renderForm } = useFormApi();
    return (
        <Container
            header={<FormHeader header={title} description={description} headerVariant={headerVariant} />}
            data-testid={props['data-testid']}
        >
            <SpaceBetween direction="vertical" size="s">
                {renderForm(
                    fields.map((field: any) => ({
                        isReadOnly,
                        isDisabled,
                        ...field,
                    }))
                )}
            </SpaceBetween>
        </Container>
    );
};

export default memo(Subform);
