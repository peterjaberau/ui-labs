import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';

/**
 * Render the Template with the data from the data driven form for the purpose of review
 * */
const Review = (props: UseFieldApiConfig) => {
    const { Template, ...rest } = useFieldApi(props);
    const { getState } = useFormApi();

    return <Template {...rest} data={getState().values} />;
};

export default Review;
