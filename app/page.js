import Cube from "./cube.js";
import { connectDB } from "./util/database.js";
import { getServerSession } from "next-auth";

import { authOptions } from "../pages/api/auth/[...nextauth].js";


export const revaildate = 60; // 페이지 단위 캐싱 예약 변수

export default async function Home() {
  let session = await getServerSession(authOptions); // 서버 컴포넌트, 서버 기능 안에서 사용

  // 해당 날짜 출력
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  let currentDate = `${year}년 ${month}월 ${day}일`;

  // DB 연결
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();



  return (

    // 현재 하려는 것 , main-visual 안에서만 cursor-none 처리하기
    <div className="inner">
      <div className="main-visual" id="cursor-none">
         <div className="main-visual-txt">
          <p>FIRST NEXTJS</p>
          <h2>PROJECT</h2>
        </div> 
         <div className="main-subtxt">
          <p>2024.06</p>
          <p>copyright@deserved</p>
        </div> 
         <div className="main-subtxt2">
          <p>* MONGO DB CONNECTED</p>
          <p>-- database from</p>
        </div>
        <Cube></Cube>
      </div>



    </div>
  );
}
