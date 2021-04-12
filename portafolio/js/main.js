const Cursor = document.getElementById('cursor');
const Cursor2 = document.getElementById('cursor2');

window.addEventListener('mousemove', pos => { 
    Cursor.style.left = pos.clientX + 'px'; 
    Cursor.style.top = pos.clientY + 'px'; 
    Cursor2.style.left = pos.clientX + 'px'; 
    Cursor2.style.top = pos.clientY + 'px'; 
    if (pos.target.id !== 'cont1' ){
        Img1.style.visibility = 'hidden';
        Img1.style.opacity = '0';    } 
    if (pos.target.id !== 'cont2'){
        Img2.style.visibility = 'hidden';
        Img2.style.opacity = '0';
    } 
    if (pos.target.id !== 'cont3'){
        Img3.style.visibility = 'hidden';
        Img3.style.opacity = '0';
    } 
});


// Images

const Img1 = document.getElementById('img1');
const Cont1 = document.getElementById('cont1');

const Img2 = document.getElementById('img2');
const Cont2 = document.getElementById('cont2');

const Img3 = document.getElementById('img3');
const Cont3 = document.getElementById('cont3');

Cont1.addEventListener('mousemove' , pos => {
    moveEffect(pos , Img1 , Cont1);
 });

Cont2.addEventListener('mousemove' , pos => {
    moveEffect(pos , Img2 , Cont2);
 });
 
Cont3.addEventListener('mousemove' , pos => {
    moveEffect(pos , Img3 , Cont3);
});

 function moveEffect(pos , img , cont) {
    img.style.left = pos.clientX + 'px';
    img.style.top = pos.clientY + 'px';
    img.style.visibility = 'visible';
    img.style.opacity = '1';
    let move = cont.vanillaTilt.getValues()
    console.log(move.tiltX)
    img.style.transform = `rotateY(${move.tiltX }deg) rotateX(${move.tiltY }deg) translateY(-50%) translateX(-50%)`;
 };


//  vanilla tilt test 
VanillaTilt.init(Cont1);
VanillaTilt.init(Cont2);
VanillaTilt.init(Cont3);

Cont1.addEventListener('tiltChange' , event => {
    Img1.style.transform = `rotateY(${event.detail.tiltX }deg) rotateX(${event.detail.tiltY }deg) translateY(-50%) translateX(-50%)`;
})
 
