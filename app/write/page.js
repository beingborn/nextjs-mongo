import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Write() {
  let userInfo = await getServerSession(authOptions); // 서버 컴포넌트, 서버 기능 안에서 사용
  return (
    <div className="write-pg">
      {userInfo ? (
        <div className="p-20 list-tit">
          <h2>WRITE</h2>
          <p>자유롭게 내용을 작성해주세요!</p>

          <form className="post-form" action="/api/post/new" method="POST">
            <input name="title" placeholder="글 제목" id="article-tit" />
            <input name="content" placeholder="글 내용" />
            <button type="submit" className="write-btn">
              POST THE ARTICLE
            </button>
          </form>

          {/* <form className="get-form" action="/api/list" method="GET">
            <button type="submit" className="write-btn">
              겟요청버튼
            </button>
          </form> */}
        </div>
      ) : (
        <div className="please-login">
          <div className="404-login" style={{width:"300px", height: "300px"}}>
            <img src="/security-black.png" style={{width: "100%", height: "100%", objectFit: "cover"}}></img>
          </div>
          <h4 style={{fontSize:"20px", marginBottom:"12px"}}>글을 쓰려면 로그인 해주세요</h4>
          <p>Please log in to write a post</p>
        </div>
      )}
    </div>
  );
}
