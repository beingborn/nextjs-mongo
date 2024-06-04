import { connectDB } from "../util/database";
// import Link from "next/link";
// 이게 서버 컴포넌트
import ListItem from "./listItem.js";

export const dynamic = "force-dynamic"; // 다이나믹 렌더링 페이지로 저장

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = JSON.parse(JSON.stringify(result)); // _id : new objectid 해당 값을 문자 배열로 바꿈
  // result.reverse(); //해당 문자 배열을 거꾸로 함 => 최신순으로 보일 수 있도록

  // 해당 id 값 찾아서 href에 바인딩 하기

  return (
    <div className="list-bg">
      <ListItem result={result}></ListItem>
    </div>
  );
}
