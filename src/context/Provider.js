import React, { useReducer, createContext } from "react";

export const StateContext = createContext();
export const DispatchContext = createContext();

const initialState = {
    educationLevel: 'None',
    subject: 'None',
    experience: 'Beginner'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_EDUCATION_LEVEL':
            console.log('educationLevel', action.payload);
            return {
                ...state,
                educationLevel: action.payload
            };
        case 'UPDATE_SUBJECT':
            console.log('subject', action.payload);
            return {
                ...state,
                subject: action.payload
            };
        case 'UPDATE_EXPERIENCE':
            console.log('experience', action.payload);
            return {
                ...state,
                experience: action.payload
            };

        default:
            return state;
    }
}

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
       
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                {children}
                </StateContext.Provider>
            </DispatchContext.Provider>
    );
}

export const useGlobalState = () => React.useContext(StateContext);
export const useDispatch = () => React.useContext(DispatchContext);



