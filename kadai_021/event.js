// HTML要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンにクリックイベントを追加
button.addEventListener('click', () => {
    // 2秒後にテキストを書き換える
    setTimeout(() => {
        text.textContent = '2秒後の表示です';
    }, 2000);
});