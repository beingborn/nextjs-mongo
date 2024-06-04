export default function Test(req, res) {
  console.log(req.query);
  return res.status(200).json({ message: good });
}
