//1.提示框,猜數字遊戲開始
//2.輸入框,給使用者輸入設定數字
//3.防呆機制-使用者沒玩遊戲離開
//         -使用者輸入的非數字
//         -使用者輸入超過範圍數字
//4.設一個1~100的亂數
//5.使用者設一個數字後,電腦開始猜數字,錯了會提示大了或小了,並逐漸縮減數字範圍,直到猜對
//6.排除猜測亂數重複的問題

//當進入畫面,遊戲開始
alert('猜數字遊戲開始摟~')

//初始條件設定
let max = 100;
let min = 0;
let play = true;

//設一個陣列存放猜過的數字
let numRand = [];


//防呆1-不玩就離開
while (play) {
    let guess = window.prompt('請猜一個1~100的數字');
    if (guess === null) {
        alert('不玩遊戲,選擇離開~');
        break;
    }
    //防呆2-輸入的不是數字
    if (isNaN(guess)) {
        alert('輸入的不是數字,請重來');
    }
    //防呆3-輸入的超過範圍
    else if (Number(guess) < min || Number(guess) > max) {
        alert('輸入的值不在範圍內,請重來');
    }
    //當防呆都沒問題,開始讓電腦猜數字
    else {
        alert('開始猜數字~');
        pcguess(guess);
    }
}


//電腦猜數字
function pcguess(a) {
    while (play) {
        let randomguess = Math.floor(Math.random() * (max - min + 1)) + min;
        numRand.push(randomguess);
        if (numRand.includes(randomguess)) {
            let randomguess = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        if (randomguess > a) {
            max = randomguess
            console.log('數字太大拉~' + '猜的數字為：' + randomguess);
        }
        else if (randomguess < a) {
            min = randomguess;
            console.log('數字太小拉~' + '猜的數字為：' + randomguess);
        }
        else {
            console.log('恭喜猜對拉~' + '答案是：' + randomguess);
            play = false;
        }
    }
}
