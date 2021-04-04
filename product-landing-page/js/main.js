const Cursor = document.getElementById('cursor');

window.addEventListener('mousemove' , position => {
    Cursor.style.top = position.clientY + 'px';
    Cursor.style.left = position.clientX + 'px';
    console.log(position)
});

