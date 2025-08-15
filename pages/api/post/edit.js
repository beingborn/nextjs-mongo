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

