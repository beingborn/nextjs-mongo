import { connectDB } from "../../util/database";
import { ObjectId } from "mongodb";

export default async function Correction(props) {
  // 서버 컴포넌트에선 props (dynamic routes == [id]) 값이 들어있다.
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // await db
  //   .collection("post")
  //   .updateOne(
  //     { _id: new ObjectId(props.params.id) },
  //     { $set: { title: "", content: "" } }
  //   );

  return (
    <div className="p-20">
      <h4>글을 작성해주세요</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          className="id-value"
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">포스트요청버튼</button>
      </form>

      <form action="/api/list" method="GET">
        <button type="submit">겟요청버튼</button>
      </form>
    </div>
  );
}
