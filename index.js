/*  count = count + 1;
    count += 1;
    document.getElementById('count-el').innerHTML = count;
*/
let countEl = document.getElementById("count-el");
let count = 0;
// .innerHTML/.innerText alternatives: .textContent
function increment() {
    count += 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById('save-el');
function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
}
