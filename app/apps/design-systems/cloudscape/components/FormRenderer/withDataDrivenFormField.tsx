import React from 'react';
import FormField from '@cloudscape-design/components/form-field';
import useFieldApi, { UseFieldApiConfig, UseFieldApiProps } from '@data-driven-forms/react-form-renderer/use-field-api';
import { getErrorText } from './utils';
import useUniqueId from '../../hooks/useUniqueId';

export interface DataDrivenFormFieldProps extends UseFieldApiProps<any> {
  isRequired: boolean;
  errorText: string | undefined;
  controlId: string;
  onFocus: () => void;
  onBlur: () => void;
}

type ExcludedFieldPropKey =
  | 'controlId'
  | 'label'
  | 'description'
  | 'errorText'
  | 'constraintText'
  | 'info'
  | 'i18nStrings'
  | 'stretch'
  | 'secondaryControl';

function getProps(formFieldProps: UseFieldApiConfig, excludeComponentProp = false) {
  let { component, ...props } = formFieldProps;
  return excludeComponentProp ? props : formFieldProps;
}

function withDataDrivenFormField(
  FieldComponent: React.FunctionComponent<any>,
  excludeComponentProp = false,
  excludedFieldPropKeys: ExcludedFieldPropKey[] = []
) {
  return (formFieldProps: UseFieldApiConfig) => {
    const props = getProps(formFieldProps, excludeComponentProp);
    const useFieldApiProps = useFieldApi(props);
    const {
      label,
      description,
      helperText,
      info,
      i18nStrings,
      stretch,
      secondaryControl,

      isDisabled,
      isReadOnly,
      isRequired,

      input,

      validateOnMount,
      meta: { error, submitFailed },
      showError,
    } = useFieldApiProps;
    const controlId = useUniqueId(input.name);
    const errorText = getErrorText(validateOnMount, submitFailed, showError, error);

    const onFocus = input.onFocus;
    const onBlur = input.onBlur;

    const cloudscapeComponentProps = {
      disabled: isDisabled,
      readOnly: isReadOnly,
      ariaRequired: isRequired,
      invalid: !!errorText,
      controlId,
    };

    const fieldProps = Object.entries({
      controlId,
      label,
      description,
      errorText,
      constraintText: helperText,
      info,
      i18nStrings,
      stretch,
      secondaryControl,
    }).reduce((props: any, [key, value]) => {
      if (!excludedFieldPropKeys.includes(key as ExcludedFieldPropKey)) {
        props[key] = value;
      }
      return props;
    }, {});

    return (
      <FormField {...fieldProps}>
        <FieldComponent
          {...useFieldApiProps}
          {...cloudscapeComponentProps}
          controlId={controlId}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormField>
    );
  };
}

export default withDataDrivenFormField;
