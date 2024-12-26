import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import TextContent from '@cloudscape-design/components/text-content';

const elementMapping: { [element: string]: (label: React.ReactNode) => React.ReactNode } = {
    h1: (label) => <h1>{label}</h1>,
    h2: (label) => <h2>{label}</h2>,
    h3: (label) => <h3>{label}</h3>,
    h4: (label) => <h4>{label}</h4>,
    h5: (label) => <h5>{label}</h5>,
    p: (label) => <p>{label}</p>,
};

const PlainText = (props: UseFieldApiConfig) => {
    const { label, element } = useFieldApi(props);

    return <TextContent>{element ? elementMapping[element]?.(label) || label : label}</TextContent>;
};

export default PlainText;
