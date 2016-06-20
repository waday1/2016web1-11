var number = Math.floor(Math.random()*3);

var answer= parseInt(window.prompt('数あてゲーム　0～2'));

var message;


while(true)
{
  if(answer===number)
 {
  message='あたり';
  break;
 }
 else if(answer<number)
 {
 message='もっと大きいよ';
 document.getElementById('choice').textContent=message;
 }
 else if(answer>number)
 {
  message='もっと小さいよ';
  document.getElementById('choice').textContent=message;
 }
  else
 {
  message='0～2を入れてね';
  document.getElementById('choice').textContent=message;
 }
}
document.getElementById('choice').textContent=message;
 
 
