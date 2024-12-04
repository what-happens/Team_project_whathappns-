import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "./authSlice";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setUser({ uid: user.uid, email: user.email })); // Redux 상태 업데이트
      console.log("로그인 성공:", user);
      return true;
    } catch (error) {
      console.error("로그인 실패:", error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser()); // Redux 상태 초기화
      console.log("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 실패:", error.message);
    }
  };

  return { login, logout };
};

export default useAuthActions;
