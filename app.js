const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

//reference elements
const btn = document.querySelector('#btn');
const col = document.querySelector('.color');

//add eventlisteners
btn.addEventListener('click', () => {
    colors.map(color => {
        document.body.style.backgroundColor = color;
        col.textContent = color;
    })
}) 