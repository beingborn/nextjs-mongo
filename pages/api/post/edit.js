import { connectDB } from "../../../app/util/database";
import { ObjectId } from "mongodb";
// import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    // console.log(req.body);

    let change = { title: req.body.title, content: req.body.content }; // 바꾸는 대상 객체 배열로 담기
    console.log(change);

    let db = (await connectDB).db("forum"); // 해당 포스트 될 db 불러오기
    let result = db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: change }); // 포스트 대상 불러와서 요청 내용 집어 넣기
    console.log(result);
    res.redirect(302, "/list"); // 응답 302 => 유저 /list 페이지로 강제 이동
  }
}

// 지금 헷갈리는 부분은 뭐가 이렇게 많은 페이지가 필요한 지 (서버)
// 서버라는 게 ** 수정 요청 처리 해주는 놈 , 로그인 확인해주는 놈 등등 각각 달라야하는 건지?
// 그리고 기존에 $set : change라고 적어놨는데 원래는 {change} 라고 해놨다. but change 자체가 객체 배열이기 떄문에 그렇게 되면 {{title : **}} 로 객체 배열을
// 두번 감싼게 되는거임
