import { FC, PropsWithChildren, useEffect, useState, createContext, useContext } from 'react';
import { applyMode, Mode, applyDensity, Density } from '@cloudscape-design/global-styles';

import '@cloudscape-design/global-styles/index.css';

export interface CloudscapeThemeProviderProps {
    /**
     * The default theme.
     */
    theme?: Mode.Light | Mode.Dark;
    /**
     * The default density.
     */
    density?: Density.Comfortable | Density.Compact;
}

export interface CloudscapeThemeContextApi {
    theme: Mode.Light | Mode.Dark;
    density: Density.Comfortable | Density.Compact;
    setTheme: React.Dispatch<React.SetStateAction<Mode>>;
    setDensity: React.Dispatch<React.SetStateAction<Density>>;
}

const initialState: CloudscapeThemeContextApi = {
    theme: Mode.Light,
    density: Density.Comfortable,
    setTheme: () => {},
    setDensity: () => {},
};

const CloudscapeThemeContext = createContext<CloudscapeThemeContextApi>(initialState);

/**
 * CloudscapeThemeProvider provides a layer abstract to interact with Cloudscape theme and theme related settings.
 */
const CloudscapeThemeProvider: FC<PropsWithChildren<CloudscapeThemeProviderProps>> = ({ children, ...props }) => {
    const [theme, setTheme] = useState(props.theme || Mode.Light);
    const [density, setDensity] = useState(props.density || Density.Comfortable);

    useEffect(() => {
        setTheme(props.theme || Mode.Light);
    }, [props.theme]);

    useEffect(() => {
        setDensity(props.density || Density.Comfortable);
    }, [props.density]);

    useEffect(() => {
        applyMode(theme);
    }, [theme]);

    useEffect(() => {
        applyDensity(density);
    }, [density]);

    useEffect(() => {
        applyMode(Mode.Light);
    }, []);

    return (
        <CloudscapeThemeContext.Provider
            value={{
                theme,
                density,
                setTheme,
                setDensity,
            }}
        >
            {children}
        </CloudscapeThemeContext.Provider>
    );
};

export const useCloudscapeThemeContext = () => useContext(CloudscapeThemeContext);

export default CloudscapeThemeProvider;
