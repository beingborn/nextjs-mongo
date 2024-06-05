// (/list/listItem.js)

"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  let currentDate = `${year}년 ${month}월 ${day}일`;

  return (
    <div className="list-page">
      <div className="list-tit">
        <h2>Article</h2>
        <p>좋아요를 누르고 댓글을 작성해보세요! 게시자에게 큰 힘이됩니다 :)</p>
      </div>

      <div className="main-btm">
        <div className="user-hello">
          <p style={{ color: "gray" }}>{currentDate}</p>
          <h2>TODAY TOP 3 TOPIC</h2>
        </div>

        <div className="top-3-wrapper">
        {result.slice(0, 3).map((item, i) => (
          <div className="top-3-list" key={i}>
            <img src="/white-wall-textures.jpg"></img>
            <p className="top-3-index">{i + 1}</p>
            <h4 className="top-3-tit">{item.title}</h4>
            <div className="top-3-right">
              {/* <p>{item.content}</p> */}
              <p>{item.author}</p>
            </div>
          </div>
          
        ))}
        </div>
      </div>

      {result.map((item, i) => (
        <div className="list-item" id="list-flex" key={i}>
          <div>
            <p>{currentDate} 발행</p>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>

          <div className="item-right">
            <p>{item.author}</p>
            <Link className="list-detail" href={`/detail/${item._id}`}>
              + MORE
            </Link>

            <Link href={"/correction/" + result[i]._id} className="list-btn">
              ✏️CORRECTION
            </Link>
            <button
              className="delete-btn"
              onClick={(e) => {
                const deleteOk =
                  window.confirm("정말 게시물을 삭제하시겠습니까?");

                if (deleteOk) {
                  fetch("/api/post/delete", {
                    body: {
                      id: result[i]._id,
                      author: result[i].author,
                    },
                  })
                    .then(() => {
                      e.target.parentElement.style.opacity = 0;
                      window.location.reload();

                      setTimeout(() => {
                        e.target.parentElement.style.display = "none";
                      }, 500);
                    })
                    .then((r) => {
                      if (r.status == 200) {
                        // 서버 응답 코드가 200
                        // return r.json();
                      } else {
                        console.log("데이터 전송 실패");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              }}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
