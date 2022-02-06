import React, { createContext, useReducer, useContext, useEffect } from "react";

const StoreContext = createContext();

const { Provider } = StoreContext;

const reducer = (state, action) => {
 
    case "ENABLECLOSE":
      return {
        ...state,
        eventClick: false,
      };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
      });
  useEffect(() => {
    API.isLoggedIn()
      .then((res) => {
        dispatch({
          type: "LOGGINGIN",
          logged_in: res.data.logged_in,
          id: res.data.user_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
