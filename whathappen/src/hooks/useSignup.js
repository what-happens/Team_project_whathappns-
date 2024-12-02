import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const [isPending, setIsPending] = useState(false);

  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }

        updateProfile(auth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, signup };
};
