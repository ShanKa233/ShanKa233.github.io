function readFromPico8() {
  if (window.pico8_gpio) {
    // 读取索引0（地址 0x5f80）的数据
    let playerScore = window.pico8_gpio[0];

    if (playerScore != null) {
      const dtext = document.getElementById("dtext");
      if ((dtext.style.display =="none")) {
        dtext.style.display = "block";
      }
      const score = document.getElementById("score-board");
      if (score.innerText != playerScore) {
        score.innerText = playerScore;
      }
    }
    /* console.log("哈喽哈喽"); */
  }
  requestAnimationFrame(readFromPico8);
}
window.addEventListener("load", readFromPico8);
