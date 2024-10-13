let randomNumber = Math.random() * 100; //Skapar variabeln randomNumber som blir till ett random tal mellan 1-100.
randomNumber = Math.round(randomNumber); //Avrundar min variabel randomNumber till ett jämnt tal utan kommatecken.
let attempts = 10; // Anger hur många försök användaren har kvar med en start av 10.
let userGuess = document.getElementById("submit-guess");
console.log(randomNumber); //Rätt svar

document.getElementById("submit-guess").addEventListener("click", function () {
  userGuess = Number(document.getElementById("guess-input").value); //Sparar värdet som användaren matar in i input-fältet i variabeln userGuess.
  attempts--; //Minskar antalet försök användaren har kvar för varje försök.

  document.querySelector(
    ".guesses-left"
  ).textContent = `Guesses left: ${attempts}`; //Uppdaterar antal försök med -1 för varje försök användaren gissar på ett nummer.

  document.querySelector(".your-guesses").textContent += ` ${userGuess},`; //Skriver ut användarens nummerförsök på hemsidan.

  console.log(attempts);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.querySelector(".result-message").textContent = "Number invalid."; //Kontrollerar att användaren matat in ett giltigt tal mellan 1 till 100 och skickar tillbaka meddelandet ovan om så inte är fallet.
    return; //Avslutar funktionen om användarens input skulle vara ogiltig.
  }

  if (userGuess < randomNumber) {
    document.querySelector(".result-message").textContent =
      "Your guess was too low."; //Om användaren skriver in ett för lågt tal än det slumpmässiga genererade numret så skickas detta till .result-message.
    document.querySelector(".result-message").style.color = "red";
  } else if (userGuess > randomNumber) {
    document.querySelector(".result-message").textContent =
      "Your guess was too high."; //Om användaren skriver in ett för högt tal än det slumpmässiga genererade numret så skickas detta till .result-message.
    document.querySelector(".result-message").style.color = "red";
  } else {
    document.querySelector(".result-message").textContent =
      "Congratulations! Your guess was correct."; //Om användaren chansar på rätt tal som är slumpmässigt genererat så skickas detta till .result-message.
    document.querySelector(".result-message").style.color = "lightgreen"; //Texten blir grön om användaren gissar rätt nummer.
  }
});
