import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT; 

type Props = {
    children: React.ReactNode
 }

const ThemeProvider: React.FC<Props> = ({children}) => {

    const [theme, setTheme] = useState(defaultTheme);

    const defaultProps = useMemo(() => {

        return ({
            theme: theme,
            setTheme: setTheme,
        })
    
    }, [theme])
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;