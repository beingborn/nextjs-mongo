import { ObjectId } from "mongodb";
// import { connectDB } from "@/app/util/database";
import { connectDB } from ".././../util/database";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="detail-wrap">
      <div className="detail-title">
        <h4>{result.title}</h4>
        <span style={{fontSize: "14px"}}>{result.author}</span>

      </div>
      
      
      <p className="detail-sub">{result.content}</p>


    </div>
  );
}
