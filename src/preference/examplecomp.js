import React, { useContext } from 'react';
import { PreferenceContext } from './PreferenceProvider';

const LanguageSelector = () => {
  const { state, updatePreference } = useContext(PreferenceContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    updatePreference('language', newLanguage);
  };

  return (
    <div>
      <label htmlFor="language">Language:</label>
      <select name="language" value={state.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};
