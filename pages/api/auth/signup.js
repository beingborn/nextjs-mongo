import { connectDB } from "../../../app/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let userEmail = req.body.email;
    let userName = req.body.name;
    let userPassword = req.body.password;
    if (!userEmail) {
      console.log("이메일 작성하셈");
      return null;
    }
    if (!userName) {
      console.log("이름 작성하셈");
      return null;
    }
    if (!userPassword) {
      console.log("비번 작성하셈");

      return null;
    }

    let db = (await connectDB).db("forum");

    // 이메일 중복 확인
    const existingUser = await db
      .collection("user_cred")
      .findOne({ email: userEmail });
    if (existingUser) {
      console.log("이메일이 중복되었습니다.");
      return null;
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    await db.collection("user_cred").insertOne(req.body);
    res.redirect(302, "/");
  }
}
