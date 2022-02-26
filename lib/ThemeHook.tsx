import { createContext, ReactChild, useContext, useMemo, useState } from "react"

const themeInitialState:{theme:ThemeType, setTheme:any} = {theme: 'Dark', setTheme: undefined}
const ThemeStateContext = createContext(themeInitialState);

type Props = { children: ReactChild }

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeType>(themeInitialState.theme);
  const themeContextValue = useMemo(() => ({theme, setTheme}), [theme]);
  return (
    <ThemeStateContext.Provider value={themeContextValue}>
      {children}
    </ThemeStateContext.Provider>)
}

export type ThemeType = 'Light'|'Dark';
export const useThemeState = () => useContext(ThemeStateContext);
export default ThemeProvider;