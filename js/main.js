const titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center'
// console.dir(titleEl)

const pEl = document.querySelector('.cool');
// console.dir(pEl)

pEl.innerHTML = "Comments for <strong>Today</strong>"
pEl.style.color = 'blue'

const linkEl = document.querySelector('a');
linkEl.setAttribute('href', 'https://www.google.com');

const commentEls = document.querySelectorAll('#comments > li');
//console.log(commentEls)

for (let commentEl of commentEls) {
    //console.log(commentEl)
    commentEl.style.fontSize = '30px'
}