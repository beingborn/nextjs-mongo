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
    <div>
      {result.map((item, i) => (
        <div className="list-item" key={i}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.author}</p>
          <Link className="list-detail" href={`/detail/${item._id}`}>
            {item.title} + 더보기
          </Link>

          <Link href={"/correction/" + result[i]._id} className="list-btn">
            ✏️글 수정
          </Link>
          <p>{currentDate} 발행</p>
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
            글 삭제
          </button>
        </div>
      ))}
    </div>
  );
}
