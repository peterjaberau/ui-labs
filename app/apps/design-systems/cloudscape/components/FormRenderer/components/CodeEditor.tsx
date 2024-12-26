import { FC, memo, useState, useMemo, useEffect, useCallback } from 'react';
import CodeEditorComponent from '@cloudscape-design/components/code-editor';
import withDataDrivenFormField, { DataDrivenFormFieldProps } from '../withDataDrivenFormField';

import 'ace-builds/css/ace.css';
import 'ace-builds/css/theme/dawn.css';
import 'ace-builds/css/theme/tomorrow_night_bright.css';

const DEFAULT_RESOURCE_STRINGS = {
    loadingState: 'Loading code editor',
    errorState: 'There was an error loading the code editor.',
    errorStateRecovery: 'Retry',
    editorGroupAriaLabel: 'Code editor',
    statusBarGroupAriaLabel: 'Status bar',
    cursorPosition: (row: number, column: number) => `Ln ${row}, Col ${column}`,
    errorsTab: 'Errors',
    warningsTab: 'Warnings',
    preferencesButtonAriaLabel: 'Preferences',
    paneCloseButtonAriaLabel: 'Close',
    preferencesModalHeader: 'Preferences',
    preferencesModalCancel: 'Cancel',
    preferencesModalConfirm: 'Confirm',
    preferencesModalWrapLines: 'Wrap lines',
    preferencesModalTheme: 'Theme',
    preferencesModalLightThemes: 'Light themes',
    preferencesModalDarkThemes: 'Dark themes',
};

const CodeEditor: FC<DataDrivenFormFieldProps> = (props) => {
    const [preferences, setPreferences] = useState(props.preferences);
    const [loading, setLoading] = useState(true);
    const [ace, setAce] = useState<object>();
    const resourceStrings = useMemo(() => {
        return {
            ...DEFAULT_RESOURCE_STRINGS,
            ...props.i18nStrings,
        };
    }, [props.i18nStrings]);

    const loadAce = useCallback(() => {
        setLoading(true);
        return import('ace-builds')
            .then((ace) => {
                ace.config.set('useStrictCSP', true);
                ace.config.set('loadWorkerFromBlob', false);
                setAce(ace);
            })
            .then(() => import('ace-builds/webpack-resolver'))
            .catch((e) => {
                console.log('Error in importing ace-builds', e);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        loadAce();
    }, [loadAce]);

    return (
        <CodeEditorComponent
            {...props}
            {...props.input}
            loading={loading}
            ace={ace}
            language={props.language}
            i18nStrings={resourceStrings}
            preferences={preferences}
            onPreferencesChange={(e) => setPreferences(e.detail)}
            onChange={({ detail }) => props.input.onChange(detail.value)}
            onRecoveryClick={loadAce}
        />
    );
};

export default memo(withDataDrivenFormField(CodeEditor));
