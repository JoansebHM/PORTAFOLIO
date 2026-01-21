import { createContext, useContext, useState, type ReactNode } from "react";
import { LANGUAGES } from "../constants/languages";

type Language = "ES" | "EN";

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    content: typeof LANGUAGES.ES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("EN");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
    };

    const content = LANGUAGES[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, content }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
