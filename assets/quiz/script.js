botaoQuestao1 = document.querySelector("#btn")
refresh = document.querySelector("#refresh")
refresh.style.visibility = "hidden";

botaoQuestao1.addEventListener("click", function (event) {
    event.preventDefault()
    botaoQuestao1.style.visibility = "hidden";
    refresh.style.visibility = "visible";
    pontuacao = 0;

    let radios1 = document.getElementsByName("questao1")
    let gabarito1 = document.getElementById("gabarito1")
    questao1Marcada = false;

    for (let i = 0, length = radios1.length; i < length; i++) {
        if (radios1[i].checked) {
            questao1Marcada = true;
            if (radios1[i].value == 'd') {
                radios1[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios1[i].parentElement.classList.add("errado")
            }

            break;
        }
    }


    let radios2 = document.getElementsByName("questao2")
    let gabarito2 = document.getElementById("gabarito2")
    questao2Marcada = false;
    for (let i = 0, length = radios2.length; i < length; i++) {
        if (radios2[i].checked) {
            questao2Marcada = true;
            if (radios2[i].value == 'b') {
                radios2[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios2[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios3 = document.getElementsByName("questao3")
    let gabarito3 = document.getElementById("gabarito3")
    questao3Marcada = false;

    for (let i = 0, length = radios3.length; i < length; i++) {
        if (radios3[i].checked) {
            questao3Marcada = true;
            if (radios3[i].value == 'd') {
                radios3[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios3[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios4 = document.getElementsByName("questao4")
    let gabarito4 = document.getElementById("gabarito4")
    questao4Marcada = false;

    for (let i = 0, length = radios4.length; i < length; i++) {
        if (radios4[i].checked) {
            questao4Marcada = true;
            if (radios4[i].value == 'b') {
                radios4[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios4[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios5 = document.getElementsByName("questao5")
    let gabarito5 = document.getElementById("gabarito5")
    questao5Marcada = false;

    for (let i = 0, length = radios5.length; i < length; i++) {
        if (radios5[i].checked) {
            questao5Marcada = true;
            if (radios5[i].value == 'd') {
                radios5[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios5[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios6 = document.getElementsByName("questao6")
    let gabarito6 = document.getElementById("gabarito6")
    questao6Marcada = false;

    for (let i = 0, length = radios6.length; i < length; i++) {
        if (radios6[i].checked) {
            questao6Marcada = true;
            if (radios6[i].value == 'c') {
                radios6[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios6[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios7 = document.getElementsByName("questao7")
    let gabarito7 = document.getElementById("gabarito7")
    questao7Marcada = false;
    for (let i = 0, length = radios7.length; i < length; i++) {
        if (radios7[i].checked) {
            questao7Marcada = true;
            if (radios7[i].value == 'e') {
                radios7[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios7[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios8 = document.getElementsByName("questao8")
    let gabarito8 = document.getElementById("gabarito8")
    questao8Marcada = false;
    for (let i = 0, length = radios8.length; i < length; i++) {
        if (radios8[i].checked) {
            questao8Marcada = true;
            if (radios8[i].value == 'e') {
                radios8[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios8[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios9 = document.getElementsByName("questao9")
    let gabarito9 = document.getElementById("gabarito9")
    questao9Marcada = false;
    for (let i = 0, length = radios9.length; i < length; i++) {
        if (radios9[i].checked) {
            questao9Marcada = true;
            if (radios9[i].value == 'e') {
                radios9[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios9[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    let radios10 = document.getElementsByName("questao10")
    let gabarito10 = document.getElementById("gabarito10")
    questao10Marcada = false;
    for (let i = 0, length = radios10.length; i < length; i++) {
        if (radios10[i].checked) {
            questao10Marcada = true;
            if (radios10[i].value == 'e') {
                radios10[i].parentElement.classList.add("correto")
                pontuacao++
            } else {
                radios10[i].parentElement.classList.add("errado")
            }

            break;
        }
    }

    if (!questao1Marcada || !questao2Marcada || !questao3Marcada || !questao4Marcada || !questao5Marcada || !questao6Marcada || !questao7Marcada || !questao8Marcada || !questao9Marcada || !questao10Marcada) {
        alert("Responda todas as questões antes de verificar as respostas!");
        mensagem.textContent = "";
        botaoQuestao1.style.visibility = "visible";
        refresh.style.visibility = "hidden";
        for (let i = 0, length = radios1.length; i < length; i++) {
            radios1[i].parentElement.classList.remove("correto");
            radios1[i].parentElement.classList.remove("errado");
            gabarito1.textContent = ""

        }

        for (let i = 0, length = radios2.length; i < length; i++) {
            radios2[i].parentElement.classList.remove("correto");
            radios2[i].parentElement.classList.remove("errado");
            gabarito2.textContent = ""

        }

        for (let i = 0, length = radios3.length; i < length; i++) {
            radios3[i].parentElement.classList.remove("correto");
            radios3[i].parentElement.classList.remove("errado");
            gabarito3.textContent = ""

        }

        for (let i = 0, length = radios4.length; i < length; i++) {
            radios4[i].parentElement.classList.remove("correto");
            radios4[i].parentElement.classList.remove("errado");
            gabarito4.textContent = ""
        }

        for (let i = 0, length = radios5.length; i < length; i++) {
            radios5[i].parentElement.classList.remove("correto");
            radios5[i].parentElement.classList.remove("errado");
            gabarito5.textContent = ""
        }

        for (let i = 0, length = radios6.length; i < length; i++) {
            radios6[i].parentElement.classList.remove("correto");
            radios6[i].parentElement.classList.remove("errado");
            gabarito6.textContent = ""
        }

        for (let i = 0, length = radios7.length; i < length; i++) {
            radios7[i].parentElement.classList.remove("correto");
            radios7[i].parentElement.classList.remove("errado");
            gabarito7.textContent = ""
        }

        for (let i = 0, length = radios8.length; i < length; i++) {
            radios8[i].parentElement.classList.remove("correto");
            radios8[i].parentElement.classList.remove("errado");
            gabarito8.textContent = ""
        }

        for (let i = 0, length = radios9.length; i < length; i++) {
            radios9[i].parentElement.classList.remove("correto");
            radios9[i].parentElement.classList.remove("errado");
            gabarito9.textContent = ""
        }

        for (let i = 0, length = radios10.length; i < length; i++) {
            radios10[i].parentElement.classList.remove("correto");
            radios10[i].parentElement.classList.remove("errado");
            gabarito10.textContent = ""
        }

    } else {
        mensagem = document.getElementById('mensagem');
        mensagem.innerHTML = `<h1 class="conteudo-titulo">Sua pontuação é: ${pontuacao}/10</h1>`;
    }


})

refresh.addEventListener("click", function () {
    location.reload()
})