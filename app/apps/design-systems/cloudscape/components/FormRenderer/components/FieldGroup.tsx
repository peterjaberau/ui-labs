import { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

const FieldGroup = ({ fields }: UseFieldApiConfig) => {
    const { renderForm } = useFormApi();

    return <>{renderForm(fields)}</>;
};

export default FieldGroup;
