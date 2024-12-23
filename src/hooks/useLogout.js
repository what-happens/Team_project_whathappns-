import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout as logoutAction } from "../redux/authSlice";

export default function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logoutAction());

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("로그아웃불가:", error);
    }
  };

  return { logout: handleLogout };
}
