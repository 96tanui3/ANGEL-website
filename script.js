const newsText = document.getElementById("newsText");

/*
  ニュース表示シーケンス
  text: 表示文字（空文字で非表示）
  duration: 表示時間(ms)
*/
const sequence = [
  { text: "", duration: 2000 },
  { text: "本日の死亡者数：13名", duration: 3000 },

  { text: "", duration: 2000 },
  { text: "行方不明者数：6名", duration: 3000 },

  { text: "", duration: 5000 }
];

let index = 0;

function playNews() {
  newsText.textContent = sequence[index].text;

  setTimeout(() => {
    index = (index + 1) % sequence.length;
    playNews();
  }, sequence[index].duration);
}

playNews();
