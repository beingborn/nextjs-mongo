"use client";

import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      className="log-btn"
      type="button"
      onClick={() => {
        signOut();
      }}
    >
      로그아웃
    </button>
  );
}
