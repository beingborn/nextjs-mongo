// pages/api/hello.js

// req (요청), res (응답)
//  밑의 코드 : 유저가 요청하면 해당 값을 json으로 바꿔서 message를 출력
// 서버 기능 성공 (200) , 실패 (500)

export default function handler(req, res) {
  if (req.method == "POST") {
    res.status(200).json({ message: "Hello" });
  }
  if (req.method == "GET") {
    // 현재 날짜와 시간을 가져오기
    const currentDate = new Date();

    // 날짜와 시간을 문자열로 포맷팅
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    res.status(200).json({ message: formattedDate });
  }
}
