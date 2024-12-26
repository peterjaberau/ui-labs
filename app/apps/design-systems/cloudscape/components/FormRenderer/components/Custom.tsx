import { FunctionComponent, memo } from 'react';
import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

const CustomMapping: FunctionComponent<UseFieldApiConfig> = (props) => {
    const { CustomComponent, ...rest } = useFieldApi(props);
    const { getState } = useFormApi();

    return <CustomComponent {...rest} data={getState().values} />;
};

export default memo(CustomMapping);
