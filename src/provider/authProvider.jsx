import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const createUser = async (email, password, displayName, phoneNumber) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, { displayName });
      setUser({ ...result.user, phoneNumber }); // Store phone number separately
      return result.user;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      setLoading(false);
    }
  };

  const logIn = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw error; // Handle errors appropriately
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser, "this is current user");
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic
          .post("/jwt", userInfo)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
            }
          })
          .catch((error) => {
            // console.error("Error fetching token:", error);
          });
      } else {
        // TODO: or removoe the token from client side
        localStorage.removeItem("access-token");
      }
      setLoading(false); // Set loading to false after checking auth state
    });

    return () => unsubscribe();
  }, [auth, axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
