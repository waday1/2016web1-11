var number=Math.hloor(Math.random()+*3);

var answer=parseInt(window.prompt('数あてゲーム　0～2'));

var message;

if(answer===number)
{
 message='あたり';
}
else if(answer<number)
{
 message='もっと大きいよ';
}
else if(answer>number)
{
 message='もっと小さいよ';
}
else
{
 message='0～2を入れてね'
}

document.getElementById('choice').textContent=message;
 
 
