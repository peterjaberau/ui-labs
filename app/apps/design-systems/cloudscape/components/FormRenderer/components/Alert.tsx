import useFieldApi, { UseFieldApiConfig } from '@data-driven-forms/react-form-renderer/use-field-api';
import AlertComponent from '@cloudscape-design/components/alert';

const Alert = (props: UseFieldApiConfig) => {
  const { content, type = 'info', ...rest } = useFieldApi(props);

  return (
    <AlertComponent statusIconAriaLabel={type} {...rest} type={type}>
      {content}
    </AlertComponent>
  );
};

export default Alert;
