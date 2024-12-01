import React from "react";
import Button from "../../components/Buttton";

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <span>어서오세요!</span>
      <form action="submit">
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <Button>로그인</Button>
      </form>
    </div>
  );
}
