let container = document.querySelector('#container');
let button = document.querySelector('#button');

for (let i = 0; i < (Number(button.className))**2; i++)
{
    let div = document.createElement('div');
    div.style.border = "solid";
    div.style.borderWidth = "thin";
    container.appendChild(div);
};

let dividers = document.querySelectorAll("#container div");

dividers.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = "black";
    });
});



button.addEventListener('mousedown', () => {
    button.style.backgroundColor = "red";
    button.className = prompt("How many squares per side (number x number)", "16");
    container.style.gridTemplateColumns = " 1fr".repeat(Number(button.className));
    container.style.gridTemplateRows = " 1fr".repeat(Number(button.className));



    while (container.firstChild)
    {
        container.removeChild(container.firstChild);
    }



    for (let i = 0; i < (Number(button.className))**2; i++)
{
    let div = document.createElement('div');
    div.style.border = "solid";
    div.style.borderWidth = "thin";
    container.appendChild(div);
};



    dividers = document.querySelectorAll("#container div");
    dividers.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = "black";
    });
});
});

button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "green";
})