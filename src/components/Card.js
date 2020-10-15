import React from "react";
import "./Card.scss";

// 레벨 당 카드 개수
const LEVEL = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 32,
};

const CARD_IMAGE = {
  0: "cpp",
  1: "javascript",
  2: "ruby",
  3: "csharp",
  4: "java",
  5: "react",
};

const CARD_KINDS = 5;

// 카드 섞기
const cardShuffle = (cardArray) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const tmp = cardArray[i];
    cardArray[i] = cardArray[j];
    cardArray[j] = tmp;
  }
  return cardArray;
};

// 카드 색 배정
const assignCard = (cardCnt) => {
  let cardArray = [];
  for (let i = 0; i < cardCnt; i += 2) {
    let cardImg = Math.floor(Math.random() * CARD_KINDS);
    // 짝 맞춰야돼서 2번 푸시
    cardArray.push(cardImg);
    cardArray.push(cardImg);
  }

  // 카드 섞기
  cardArray = cardShuffle(cardArray);

  return cardArray;
};

// 카드 그리기
const printCard = (card, idx) => {
  const cardKind = CARD_IMAGE[card];
  const cardSrc = require(`../img/${cardKind}.svg`);
  return (
    <div className={`card ${idx}`} key={idx}>
      <div className="card-inner">
        <div className="card-front">
          <img src={cardSrc} alt={cardKind} />
        </div>
        <div className="card-back">뒤</div>
      </div>
    </div>
  );
};

const Card = () => {
  let lv = 3;
  let cardArray = assignCard(LEVEL[lv]);

  return (
    <section>
      <div className="card-section">
        <section className="card-container">
          {cardArray.map((card, i) => printCard(card, i))}
        </section>
      </div>
    </section>
  );
};

export default Card;
