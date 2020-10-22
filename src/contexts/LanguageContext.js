import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('spanish');
  const setLang = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{ language, setLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
