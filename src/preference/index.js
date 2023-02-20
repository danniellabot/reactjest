import React, { createContext, useReducer, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthenticatedUserContext } from './AuthProvider';

export const PreferenceContext = createContext();

const defaultPreferences = {
  language: 'en',
  location: 'us',
  tShirtSize: 'M',
  building: 'A',
  fitnessLevel: 'Beginner',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PREFERENCE':
      return {
        ...state,
        [action.preferenceName]: action.value,
      };
    default:
      return state;
  }
};

export const PreferenceProvider = ({ children }) => {
  const { accessToken } = useContext(AuthenticatedUserContext);
  const [state, dispatch] = useReducer(reducer, defaultPreferences);

  useEffect(() => {
    if (accessToken) {
      const decodedToken = jwt_decode(accessToken);
      const { language, location } = decodedToken;
      dispatch({ type: 'UPDATE_PREFERENCE', preferenceName: 'language', value: language });
      dispatch({ type: 'UPDATE_PREFERENCE', preferenceName: 'location', value: location });
    }
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(state));
  }, [state]);

  const updatePreference = (preferenceName, value) => {
    dispatch({ type: 'UPDATE_PREFERENCE', preferenceName, value });
  };

  const preferenceContextValue = {
    state,
    updatePreference,
  };

  return (
    <PreferenceContext.Provider value={preferenceContextValue}>
      {children}
    </PreferenceContext.Provider>
  );
};
