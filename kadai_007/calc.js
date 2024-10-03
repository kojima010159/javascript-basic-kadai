// 変数numに1以上の正の数を代入
let num = 15; // ここでnumを好きな値に設定できます

// 3と5の倍数を最初にチェックする
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    console.log("5の倍数です");
} else {
    console.log(num);
}