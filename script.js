const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {

    let gridCount = Number(prompt(`Enter an integer,`));
    createBox(gridCount);

})

const container = document.querySelector(`#main`);
container.textContent = ``;

function createBox(gridCount) {

    container.innerHTML = ``;

    for(let i = 0; i < gridCount * gridCount; i++) {

        console.log(gridCount);
        const box = document.createElement(`div`);
        box.classList.add(`grid`);
        box.style.flex = `0 0 calc(calc(100% / ${gridCount}) - 4px)`;
        box.style.paddingTop = `calc(calc(100% / ${gridCount}) - 4px)`;
        container.appendChild(box);
    }
}