// 祝日名
const holidays = [
  "正月",
  "成人の日",
  "建国記念日",
  "天皇誕生日",
  "春分の日",
  "昭和の日",
  "憲法記念日",
  "みどりの日",
  "こどもの日",
  "海の日",
  "山の日",
  "敬老の日",
  "秋分の日",
  "スポーツの日",
  "文化の日",
  "勤労感謝の日"
];

// forを使って祝日を順番に出力する
for (let i = 0; i < holidays.length; i++) {  // 修正点：i > holidays.length を i < holidays.length に変更
  console.log(holidays[i]);
}

// whileを使って祝日を順番に出力する
let index = 0;
while (index < holidays.length) {  // 修正点：breakを取り除き条件式を修正
  console.log(holidays[index]);
  index++;
}