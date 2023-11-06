import { createContext, useReducer, useContext } from "react";

const initialState = {
  membership: "Sign up to become a member today",
};

const CHOOSE_MEMBERSHIP = "CHOOSE_MEMBERSHIP";

const membershipReducer = (state, action) => {
  switch (action.type) {
    case CHOOSE_MEMBERSHIP:
      return { membership: action.newMembership };
    default:
      return state;
  }
}

export const MemStoreContext = createContext();

export const useMembership = () => {
  return useContext(MemStoreContext);
}

export const MembershipProvider = ({ children }) => {
  const [state, dispatch] = useReducer(membershipReducer, initialState);

  const chooseMembership = (newMembership) => {
    dispatch({ type: CHOOSE_MEMBERSHIP, newMembership });
  };

  return (
    <MemStoreContext.Provider value={{ state, chooseMembership }}>
      {children}
    </MemStoreContext.Provider>
  );
};

