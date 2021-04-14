const Cursor = document.getElementById('cursor');

window.addEventListener('mousemove', pos => {
    Cursor.style.left = pos.clientX + 'px';
    Cursor.style.top = pos.clientY + 'px';
    Cursor2.style.left = pos.clientX + 'px';
    Cursor2.style.top = pos.clientY + 'px';
    if (!pos.target.classList.contains('img')) {
        Img1.style.visibility = 'hidden';
        Img1.style.opacity = '0';
    }
    if (!pos.target.classList.contains('img')) {
        Img2.style.visibility = 'hidden';
        Img2.style.opacity = '0';
    }
    if (!pos.target.classList.contains('img')) {
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

Cont1.addEventListener('mousemove', pos => {
    moveEffect(pos, Img1, Cont1);
});

Cont2.addEventListener('mousemove', pos => {
    moveEffect(pos, Img2, Cont2);
});

Cont3.addEventListener('mousemove', pos => {
    moveEffect(pos, Img3, Cont3);
});

function moveEffect(pos, img, cont) {
    let imgWidth = img.clientWidth / 2;
    let imgHeight = img.clientHeight / 2;
    let x = ((window.innerWidth / 2) - pos.clientX) / 10;
    img.style.left = (pos.clientX - imgWidth) + 'px';
    img.style.top = (pos.clientY - imgHeight) + 'px';
    img.style.visibility = 'visible';
    img.style.opacity = '1';
    img.style.transform = `rotate(${x}deg)`;
    setTimeout(() => {
        img.style.transform = `rotate(${x - x}deg)`;
    }, 800)
};

// Cursor 2

const Cursor2 = document.getElementById('cursor2');

window.addEventListener('mousemove', pos => {
    if(pos.target.classList.contains("hover")){
        Cursor2.style.width = "50px"
        Cursor2.style.height = "50px"
    } else{
        Cursor2.style.width = "0px"
        Cursor2.style.height = "0px"
    }
});

