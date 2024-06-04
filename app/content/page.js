import age from ".//data.js";

export default function Content() {
  let articleTitle = [
    "next-js로 구현하겠습니다.",
    "제가 서버도 지금 해야하는데 해야죠",
    "지금 하는 게 큰 도움이 됐으면 좋겠습니다",
  ];
  return (
    <div>
      <h2>정치,경제</h2>
      <div className="article-item">
        <h4>챗지피티 싸가지 $40</h4>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="article-item">
        <h4>갤럭시 재미니도 싸가지 $40</h4>
        <p>$40</p>
        <p>1개</p>
        <p>{age}</p>
      </div>

      <Hello articleTitle={articleTitle} />
      <Hello articleTitle={articleTitle} />
      <Hello articleTitle={articleTitle} />

      <Banner content="미두" color="blue"></Banner>
      <Banner content="북마크" color="orange"></Banner>
      <Banner content="오렌지" color="yellow"></Banner>
    </div>
  );
}

function Hello(props) {
  return (
    <div className="hello-customer">
      <h4>안녕하세요</h4>
      <h4>OO님! 좋은 하루에요</h4>
      <p>{props.articleTitle[0]} 이런 기사는 어떠세요?</p>
      <p>{props.articleTitle[1]} 이런 기사는 어떠세요?</p>
    </div>
  );
}

function Banner(props) {
  return (
    <div>
      <h4>{props.content}런칭을 축하드립니다! 15% 할인 쿠폰을 드릴게요</h4>;
      <button type="button" style={{ backgroundColor: `${props.color}` }}>
        다운로드
      </button>
    </div>
  );
}
