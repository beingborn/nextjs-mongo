export default function handler(req, res) {
  console.log(req.query);
  return res.status(200).json;
}

// 데이터 전송도 마음대로 받을 수 있다.
