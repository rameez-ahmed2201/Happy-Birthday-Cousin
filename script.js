
function openLetter(){const letter=document.getElementById('letterContent');if(!letter)return;letter.style.display='block';letter.scrollIntoView({behavior:'smooth',block:'nearest'});celebrate();}
let giftUnlocked=false;
function blowCandle(candle){if(candle.classList.contains('out'))return;candle.classList.add('out');const remaining=document.querySelectorAll('.candle:not(.out)').length;if(remaining===0&&!giftUnlocked){giftUnlocked=true;document.getElementById('cakeMessage').textContent='May every lovely wish find its way to you, Adina! 💗';celebrate();setTimeout(()=>{const gift=document.getElementById('secretGift');gift.style.display='block';gift.scrollIntoView({behavior:'smooth',block:'center'});},900);}}
function openGift(){const message=document.getElementById('giftMessage');if(!message)return;message.style.display='block';const button=document.querySelector('.gift-button');if(button)button.style.display='none';celebrate();setTimeout(()=>message.scrollIntoView({behavior:'smooth',block:'center'}),250);}
function celebrate(){const decorations=['🎉','💗','✨','🌸','🎀'];for(let i=0;i<35;i++){const piece=document.createElement('span');piece.className='confetti';piece.textContent=decorations[Math.floor(Math.random()*decorations.length)];piece.style.left=Math.random()*100+'vw';piece.style.fontSize=(14+Math.random()*16)+'px';piece.style.animationDuration=(2+Math.random()*2)+'s';document.body.appendChild(piece);setTimeout(()=>piece.remove(),4500);}}

// Show a designed placeholder instead of a broken-image icon until a photo is added.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.photo-frame img').forEach(function (img) {
    var frame = img.closest('.photo-frame');
    function markReady() {
      frame.classList.remove('image-missing');
      frame.classList.add('image-ready');
    }
    function markMissing() {
      frame.classList.add('image-missing');
      frame.classList.remove('image-ready');
    }
    img.addEventListener('load', markReady);
    img.addEventListener('error', markMissing);
    if (img.complete && img.naturalWidth > 0) markReady();
    else if (img.complete && img.naturalWidth === 0) markMissing();
  });
});
