window.alert('こんにちは世界!');

console.log('こんにちは世界!');

document.getElementById('choice').textContent = new Date();

var result = window.confirm('準備OK？');



if(result){
document.getElementById('choise').textContent = 'おｋが押されました';
}else{
document.getElementById('choise').textContent = 'キャンセルが押されました';
}
var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください'));

var message;
if(answer === number){
message = '当り';
}else if(answer < number){
message = '残念！大きいよ';
}else if(number < answer){
message = '少ないよ';
}else{
message = '0~3入れないと爆発します';
}

document.getElementById('choise').textContent = message;
