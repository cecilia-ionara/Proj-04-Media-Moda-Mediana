btn1 = document.querySelector("#btn1");
addVideo = document.getElementById("addVideo");
refresh = document.querySelector("#refresh");
respostaSubmetida = false;
btn1.style.visibility = "visible";
refresh.style.visibility = "hidden";
addVideo.style.visibility = "hidden";

btn1.addEventListener("click", function(event){
    event.preventDefault()
    if (respostaSubmetida) {
        return;
      }


    let radios = document.getElementsByName("questao1");
    let gabarito1 = document.getElementById("gabarito1");
    btn1.style.visibility = "hidden";
    refresh.style.visibility = "visible";
    addVideo.style.visibility = "visible";
    respostaSubmetida = true;
    
    for (let i = 0, length = radios.length; i < length; i++) {
        
        if (radios[i].checked) {
            if(radios[i].value == 'd'){
                gabarito1.textContent = "Gabarito D. Resposta certa"
                radios[i].parentElement.classList.add("correto")
                
            } else{
                gabarito1.textContent = "Gabarito D. Resposta errada"
                radios[i].parentElement.classList.add("errado")
                
            }
            
            break;
        }
    }
    
    
})


refresh.addEventListener("click", function () {
    location.reload()
})
