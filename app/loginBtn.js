"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="log-btn"
      type="button"
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}

// 로그인 성공 시 signOut함수를 실행할 수 있는 로그아웃 버튼으로 변경
// 내 생각에 userInfo를 담고 있는 layout.js에서 props로 login 버튼에 userInfo의 유무를 props로 전달하고
// 삼항 연산자를 이용해서 <div>button type signIn</div> : <div>button type signOut</div>을 해줘야함

// logState 변경
