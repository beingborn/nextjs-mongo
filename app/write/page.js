import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Write() {
  let userInfo = await getServerSession(authOptions); // 서버 컴포넌트, 서버 기능 안에서 사용
  return (
    <>
      {userInfo ? (
        <div className="p-20">
          <h4>글을 작성해주세요</h4>

          <form className="post-form" action="/api/post/new" method="POST">
            <input name="title" placeholder="글 제목" />
            <input name="content" placeholder="글 내용" />
            <button type="submit" className="write-btn">
              포스트요청버튼
            </button>
          </form>

          <form className="get-form" action="/api/list" method="GET">
            <button type="submit" className="write-btn">
              겟요청버튼
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h4>글을 쓰려면 로그인 해주세요</h4>
        </div>
      )}
    </>
  );
}
