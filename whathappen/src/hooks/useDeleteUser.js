import { useNavigate } from "react-router-dom";
import { persistor } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function useDeleteUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/delete`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        dispatch(logout());
        await persistor.purge();
        navigate("/");
      } else {
        console.error("회원탈퇴 실패");
      }
    } catch (error) {
      console.error("회원탈퇴 실패:", error);
    }
  };

  return { handleDelete };
}
