const home = document.getElementById("home");
const bntTzeet = document.getElementById("bntTzeet");
home && inputEvent(home);
bntTzeet && inputEvent(bntTzeet);

/**
 * @param { HTMLElement } div 
 */
function inputEvent(div) {
    const textArea = div.querySelector("[contentEditable=true]");
    const buttonEnviar = div.querySelector("button");
    const countSpan = div.querySelector("span");

    // console.log(div, textArea, buttonEnviar, countSpan);

    textArea.addEventListener('blur', () => { /^\s$/.test(textArea.innerText) && (textArea.innerText = "") });

    textArea.addEventListener("input", (ev) => {
        // console.log(ev);
        const textIsEmpty = !/\S/.test(textArea.innerText);
        buttonEnviar.disabled = textIsEmpty;
        const restanteCaracter = (140 - textArea.innerText.length);

        if (!textIsEmpty && restanteCaracter < 40) {
            countSpan.textContent = restanteCaracter;
            if (restanteCaracter < 0) {
                countSpan.style.color = "rgb(255, 0, 0)";
            } else {
                countSpan.style.color = "rgb(255, 200, 0)";
            }
        } else {
            countSpan.textContent = "";
        }
        // console.log(textIsEmpty, restanteCaracter);
    
    })   
}