import { connectDB } from "../../../app/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    let session = await getServerSession(req, res, authOptions);

    if (session) {
      req.body.author = session.user.email;
    }

    let db = (await connectDB).db("forum");

    if (find.author == session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body.id) }); // 요청 받은 ID 삭제

      res.status(200).json({ message: "Success" });
    }
  } else {
    console.log("삭제할 수 없습니다.");
  }
}
