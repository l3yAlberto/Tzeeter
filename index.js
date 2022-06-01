window.addEventListener('load', (ev) => {
    const home = document.getElementById("home");
    const bntTzeet = document.getElementById("bntTzeet");
    inputEvent(home);
    inputEvent(bntTzeet);
});

/**
 * @param { HTMLElement } div 
 */
function inputEvent(div) {
    if (!div) return;

    const textArea = div.querySelector("[contentEditable=true]");
    const buttonEnviar = div.querySelector("button");
    const countSpan = div.querySelector("span");

    // console.log(div, textArea, buttonEnviar, countSpan);

    textArea.addEventListener('blur', () => { /^\s$/.test(textArea.innerText) && (textArea.innerText = "") });

    textArea.addEventListener("input", (ev) => {
        // console.log(ev);
        let textIsEmpty = !/\S/.test(textArea.innerText);
        const restanteCaracter = (140 - textArea.innerText.length);

        if (!textIsEmpty && restanteCaracter < 40) {
            countSpan.textContent = restanteCaracter;

            if (restanteCaracter < 0) {
                textIsEmpty = true;
                countSpan.style.color = "rgb(255, 0, 0)";
            } else {
                countSpan.style.color = "rgb(255, 200, 0)";
            }
        } else {
            countSpan.textContent = "";
        }

        buttonEnviar.disabled = textIsEmpty;
        
        // console.log(textIsEmpty, restanteCaracter);
    })   
}