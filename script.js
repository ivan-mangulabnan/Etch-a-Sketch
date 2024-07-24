document.addEventListener(`DOMContentLoaded`, () => {
    createBox();
})

const container = document.querySelector(`#main`);
container.textContent = ``;

function createBox() {
    for(let i = 0; i < 2500; i++) {
        const box = document.createElement(`div`);
        box.className = `box`;
        container.appendChild(box);
    }
}