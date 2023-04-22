const username = document.getElementById("username");
const savescorebtn = document.getElementById("savescorebtn");
const finalscore = document.getElementById("finalscore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highscore = JSON.parse(localStorage.getItem("highscore")) || [];
const HIGH_SCORE = 5;
//console.log(highscore);



finalscore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    savescorebtn.disabled = !username.value;
});
saveHighScore = e => {
    console.log("click");
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highscore.push(score);

    highscore.sort((a, b) => b.score - a.score);
    highscore.splice(5);
    localStorage.setItem("highscore", JSON.stringify(highscore));
    //console.log(highscore);
};