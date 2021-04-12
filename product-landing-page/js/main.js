const Cursor = document.getElementById('cursor');
const CursorVideo = document.querySelector('.cursor-video');
const ImgMove = document.querySelector('.video_img');

window.addEventListener('mousemove' , position => {
    Cursor.style.top = position.clientY + 'px';
    Cursor.style.left = position.clientX + 'px';
    if(position.target.classList.contains('video_img') || position.target.classList.contains('cursor-video')){
        CursorVideo.style.opacity = '1';
        CursorVideo.style.top = position.clientY + 'px';
        CursorVideo.style.left = position.clientX + 'px';
        Cursor.style.zIndex = '10';
    } else {
        CursorVideo.style.opacity = '0';
        Cursor.style.zIndex = '100';
    }

    const angleX = (((position.clientX - (window.innerWidth / 2)) / 100) * 3);
    const angleY = (((position.clientY - (window.innerHeight / 2)) / -100) * -3  );
    ImgMove.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    console.log(angleY , angleX )
    
});

ImgMove.addEventListener('mousemove' , position => {
    CursorVideo.style.top = position.clientY + 'px';
    CursorVideo.style.left = position.clientX + 'px';
});

