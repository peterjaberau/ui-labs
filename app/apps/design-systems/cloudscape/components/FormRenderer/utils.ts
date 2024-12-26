export const getErrorText = (validateOnMount: any, submitFailed: boolean | undefined, showError: any, error: any) => {
  return (validateOnMount || submitFailed || showError) && error && typeof error === 'string' ? error : undefined;
};
