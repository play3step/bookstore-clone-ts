import { login, resetPassword, resetRequest, signup } from "@/apis/auth.api";
import { SignupProps } from "@/pages/Signup";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAuth = () => {
  const { isloggedIn, storeLogin, storeLoggout } = useAuthStore();
  const { showAlert } = useAlert();
  const nav = useNavigate();

  const userLogin = (data: SignupProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);

        showAlert("로그인이 완료되었습니다.");
        nav("/");
      },
      (error) => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  const userSignUp = (data: SignupProps) => {
    signup(data).then((res) => {
      showAlert("회원가입 되었습니다.");
      nav("/login");
    });
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert("비밀번호가 초기화되었습니다.");
      nav("/login");
    });
  };

  const [resetReq, setResetReq] = useState(false);

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetReq(true);
    });
  };

  return {
    userLogin,
    userSignUp,
    userResetPassword,
    resetReq,
    userResetRequest,
  };
};
