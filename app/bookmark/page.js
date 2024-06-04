"use client";
import Link from "next/link";
import { useState } from "react";

export default function BookMark() {
  let [like, likeChange] = useState([0, 0, 0, 0]);
  let articleGroup = [
    "chat-gpt, 코파일럿에게 점유율 뺏기고 나락행",
    "스마트폰 가장 비싼 나라는 한국…2029년까지 1위 전망",
    '창원 무동2초교 설립 보류…"학교 신설 수요 부족" 등 이유',
    '은행 파업, 더이상 가만이 있을 수 없다. "금리 인상 등 주요 원인"',
  ];
  return (
    <div>
      <h2>정치,경제</h2>
      {articleGroup.map((a, i) => {
        return (
          <div className="article" key={i}>
            <img
              src={`/article-${i + 1}.png`}
              style={{ width: "300px", height: "300px" }}
            ></img>
            <h4>{a}</h4>
            <span>{like[i]}</span>
            <button
              onClick={() => {
                let copy = [...like];
                copy[i]++;
                likeChange(copy);
              }}
            >
              플러스
            </button>
            <button
              onClick={() => {
                let copy = [...like];
                copy[i]--;
                likeChange(copy);
              }}
            >
              마이너스
            </button>
          </div>
        );
      })}

      <Link className="go-rewrite" href="bookmark/rewrite">
        글쓰기
      </Link>
    </div>
  );
}
