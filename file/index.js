const resolveDispute = () => {
  const randomNumber1 = Math.floor (Math.random () * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  
  const randomNumber2 = Math.floor (Math.random () * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
  
  if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").textContent = "Draw!";
  }

  document.querySelector(".explanation").textContent = "You can try again, click anywhere!";
};

document.addEventListener("click", (e) => {
  resolveDispute();
});