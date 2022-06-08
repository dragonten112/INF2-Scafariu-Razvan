var c = document.querySelector('canvas');




var cx=c.getContext('2d');


cx.arc(150,75,73,0,Math.PI*2,false);

cx.strokeStyle ='rgba(8,129,120)';
cx.fillStyle = 'rgba(8,129,120)';
cx.stroke();
cx.fill();