import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/Firebase.config";
export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState({});
  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Signout user
  const logoutUser = () => {
    return signOut(auth);
  };

  // setting observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  // console.log(user.photoURL);

  const authInfo = { createUser, loginUser, user, logoutUser };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
AuthProviders.propTypes = {
  children: PropTypes.node,
};
export default AuthProviders;
