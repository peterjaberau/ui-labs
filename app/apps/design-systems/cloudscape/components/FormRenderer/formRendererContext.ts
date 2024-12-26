import { createContext, useContext } from 'react';

export interface FormRendererContextProps {
    isSubmitting?: boolean;
    errorText?: string;
}

export const FormRendererContext = createContext<FormRendererContextProps>({});

export const useFormRendererContext = () => useContext(FormRendererContext);
