import { FC, memo } from 'react';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import Container from '@cloudscape-design/components/container';
import FormHeader from '../FormHeader';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { Field } from '../../types';

export interface WizardStepProps {
    fields: Field[];
    header?: React.ReactNode;
    showError?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
}

const WizardStep: FC<WizardStepProps> = ({ header, fields, showError, isReadOnly, isDisabled }) => {
    const { renderForm } = useFormApi();
    return (
        <Container header={<FormHeader header={header} />}>
            <SpaceBetween direction="vertical" size="l">
                {renderForm(
                    fields.map((field) => ({
                        isReadOnly,
                        isDisabled,
                        ...field,
                        showError,
                    }))
                )}
            </SpaceBetween>
        </Container>
    );
};

export default memo(WizardStep);
