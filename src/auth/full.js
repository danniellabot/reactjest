import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import Cookies from "js-cookie";

// Define initial state
const initialState = {
  accessToken: null,
};

// Define auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };
    case "CLEAR_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: null,
      };
    default:
      return state;
  }
};

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // Simulate loading of access token from cookie
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      dispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
      const expiration = Cookies.get("accessTokenExpiry");
      if (expiration && new Date(expiration) <= new Date()) {
        setModalVisible(true);
      }
    }
    setLoading(false);
  }, []);

  // Set access token and expiry using js-cookie
  const setAccessToken = (accessToken) => {
    Cookies.set("accessToken", accessToken);
    Cookies.set(
      "accessTokenExpiry",
      new Date(new Date().getTime() + 10 * 60 * 1000)
    ); // 10 minutes expiry
    dispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
  };

  // Clear access token and show modal
  const clearAccessToken = () => {
    Cookies.remove("accessToken");
    Cookies.remove("accessTokenExpiry");
    dispatch({ type: "CLEAR_ACCESS_TOKEN" });
    setModalVisible(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AuthContext.Provider
        value={{ state, dispatch, setAccessToken, clearAccessToken }}
      >
        {children}
      </AuthContext.Provider>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <p>Your session has expired. Please log in again.</p>
            <button onClick={() => setModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

// Export AuthContext and AuthProvider
export { AuthContext, AuthProvider };
