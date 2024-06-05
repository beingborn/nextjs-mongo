export default function Register() {
  return (
    <div>
      <div className="list-tit">
        <h2>SIGN UP</h2>
        <p>로그인하세요!</p>
      </div>
      <form className="signup-form" method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="password" placeholder="비번" />
        <button type="submit" id="signup-submit">완료하기</button>
      </form>
    </div>
  );
}
