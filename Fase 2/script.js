// Obter o elemento botão
const botao = document.getElementById("botao");

// Adicionar um event handler ao botão
botao. addEventListener ("click", function() {
// Manipular o elemento h1
const h1 = document.querySelector("h1");
h1. textContent = "Botão clicado!";
});

botao.addEventListener ("click", function(){

    const h1 = document.querySelector("h1");
    h1.style.backgroundColor = "red";
})

const todoInput = document.querySelector("input");

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log(todoInput.value);
    }
});
