import { createContext, ReactChild, useContext, useMemo, useState } from "react"

const languageInitialState:{language:Language, setLanguage:any} = {language: 'English', setLanguage: undefined}
const LanguageStateContext = createContext(languageInitialState);

type Props = { children: ReactChild }

const LangProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Language>(languageInitialState.language);
  const languageContextValue = useMemo(() => ({language, setLanguage}), [language]);
  return (
    <LanguageStateContext.Provider value={languageContextValue}>
      {children}
    </LanguageStateContext.Provider>)
}

export type Language = 'English' | 'Spanish';
export const useLangState = () => useContext(LanguageStateContext);
export default LangProvider;