import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import AuthContext from "../../contexts/AuthContext/AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser_] = useState(localStorage.getItem("SHDCL_User") || null);
  const [loading, setLoading] = useState(true);
  const [token, setToken_] = useState(
    localStorage.getItem("accessToken_SHDCL")
  );
  // const [user, setUser_] = useState(localStorage.getItem("accessToken"));

  const setToken = (newToken) => {
    console.log(newToken);
    setToken_(newToken);
  };
  const setUser = (user) => {
    setUser_(user);
  };
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "bearer " + token;
      localStorage.setItem("accessToken_SHDCL", token);
      localStorage.setItem("SHDCL_User", user);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("accessToken_SHDCL");
    }
  }, [token]);
  // useEffect(()=>{
  //   if(user){
  //     // axios.defaults.headers.common["Authorization"] = "bearer " + token;
  //     localStorage.setItem("urgentUser", user);
  //   }
  // },[user])
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;

// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import auth from "../../config/firebase/firebase.auth";
// import AuthContext from "../../contexts/AuthContext/AuthContext";

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const profileUpdate = async (updateUser = {}) => {
//     setLoading(true);
//     await updateProfile(auth.currentUser, updateUser);
//     setUser((preUser) => ({ ...preUser, ...updateUser }));
//   };

//   const logout = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     () => {
//       unsubscribe();
//     };
//   }, []);

//   const value = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     profileUpdate,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
