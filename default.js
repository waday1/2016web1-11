var number=Math.hloor(Math.random()+*3);

var answer=parseInt(window.prompt('数あてゲーム　0～2')); 

var message;

if(answer===number)
{
 massage='あたり';
}
else if(answer<number)
{
 massage='もっと大きいよ';
}
else if(answer>number)
{
 massage='もっと小さいよ';
}
else
{
 massage='0～2を入れてね'
}

document.getElementById('choise').textContent=message;
 
