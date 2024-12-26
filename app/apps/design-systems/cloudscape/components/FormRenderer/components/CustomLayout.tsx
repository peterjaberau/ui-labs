import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import Grid from '@cloudscape-design/components/grid';

const CustomLayout = ({ fields, ...props }: UseFieldApiConfig) => {
    const { renderForm } = useFormApi();
    const { gridDefinition, ...rest } = useFieldApi(props);

    return (
        <Grid {...rest} gridDefinition={gridDefinition}>
            {renderForm(fields)}
        </Grid>
    );
};

export default CustomLayout;
