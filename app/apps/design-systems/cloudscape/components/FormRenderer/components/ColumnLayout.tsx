import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import ColumnLayoutComponent from '@cloudscape-design/components/column-layout';

const ColumnLayout = ({ fields, ...props }: UseFieldApiConfig) => {
    const { renderForm } = useFormApi();
    const { ...rest } = useFieldApi(props);

    return (
        <ColumnLayoutComponent {...rest} columns={fields?.length || 1}>
            {renderForm(fields)}
        </ColumnLayoutComponent>
    );
};

export default ColumnLayout;
