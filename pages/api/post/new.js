import { connectDB } from "../../../app/util/database";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (session) {
    req.body.author = session.user.email;
  }
  console.log(req.body.author);
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목써라");
    } else {
      let db = (await connectDB).db("forum"); // 해당 포스트 될 db 불러오기
      let result = db.collection("post").insertOne(req.body); // 포스트 대상 불러와서 요청 내용 집어 넣기
      res.redirect(302, "/list"); // 응답 302 => 유저 /list 페이지로 강제 이동
    }
  }
}
