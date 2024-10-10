// 定数にHTML要素を代入
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

// ボタンがクリックされたときの処理
buttonElement.addEventListener('click', function() {
  textElement.textContent = 'クリックされました！';
});