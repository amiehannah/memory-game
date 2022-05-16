const grid = document.querySelector(".grid__container");
const movesCounter = document.querySelector(".countMoves"); 
const restartBtn = document.querySelector(".restart");

let scoreCount = 0;

countMoves.textContent = scoreCount;

const getCardArray = () => [
  { name: "aries", imgSrc: "./images/aries.png" },
  { name: "cancer", imgSrc: "./images/cancer.png" },
  { name: "taurus", imgSrc: "./images/taurus.png" },
  { name: "gemini", imgSrc: "./images/gemini.png" },
  { name: "leo", imgSrc: "./images/leo.png" },
  { name: "aquarius", imgSrc: "./images/aquarius.png" },
  { name: "libra", imgSrc: "./images/libra.png" },
  { name: "pisces", imgSrc: "./images/pisces.png" },
  { name: "aries", imgSrc: "./images/aries.png" },
  { name: "cancer", imgSrc: "./images/cancer.png" },
  { name: "taurus", imgSrc: "./images/taurus.png" },
  { name: "gemini", imgSrc: "./images/gemini.png" },
  { name: "leo", imgSrc: "./images/leo.png" },
  { name: "aquarius", imgSrc: "./images/aquarius.png" },
  { name: "libra", imgSrc: "./images/libra.png" },
  { name: "pisces", imgSrc: "./images/pisces.png" },
];

// randomise function
const randomiseCards = () => {
  const cardData = getCardArray();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
  //   console.log(cardData);
};

// Generate HTML Cards
const createCards = () => {
  const cardData = randomiseCards();
  //    console.log(cardData)
  // GENERATE HTML
  cardData.forEach((item) => {
    // console.log(item);
    const card = document.createElement("div");
    const faceSide = document.createElement("img");
    const backSide = document.createElement("img");
    card.classList = "card";
    faceSide.classList = "face";
    backSide.classList = "back";
    // attach the info to the cards
    faceSide.src = item.imgSrc;
    backSide.src = "images/moon.png";
    card.setAttribute("name", item.name);
    // ATTACH THE CARDS TO THE SECTION
    grid.appendChild(card);
    card.appendChild(faceSide);
    card.appendChild(backSide);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkForMatch(e);
    });
  });
};

// CHECK CARDS
const checkForMatch = (e) => {
  const clickedCard = e.target;
  console.log(clickedCard);
  clickedCard.classList.add("flipped"); //used for functionality
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);
  // flip 2 and do a check
  if (flippedCards.length === 2) {
    //do a check
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.add("matched");
        card.style.pointerEvents = "none";
        const matchedCards = document.querySelectorAll(".matched");
        console.log(matchedCards.length);
        if (matchedCards.length === 16) {
          setTimeout(
            () => alert(`Congratulations! You've found all matches in ${scoreCount} moves!`),
            500
          );
        }
      });
    } else {
      console.log("no match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 750);
      });
    }
    scoreCount++;
    countMoves.textContent = scoreCount;
  }
};

// RESTART
const restartGame = () => {
  let cardData = randomiseCards();
  let cardFaces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    cards[index].classList.remove("matched");
    // Randomise the cards on refresh
    cards[index].style.pointerEvents = "all";
    cardFaces[index].src = item.imgSrc;
    cards[index].setAttribute("name", item.name);
  });
  scoreCount = 0;

  countMoves.textContent = scoreCount;
};

createCards();

restartBtn.addEventListener("click", () => {
  restartGame();
});
