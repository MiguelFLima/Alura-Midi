function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play()
    } else {
        alert('elemento não existe ou seletor inválido')
    }
}






const listaDeTeclas = document.querySelectorAll('.tecla')

// enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    };
    
    
    
    
    

    tecla.onkeydown = function(e) {
        console.log(e.code)


        if(e.code === 'Enter' || e.code === 'Space'){
            tecla.classList.add('ativa')
        } else {
            
        }
    };
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}












/* 

// function tocaSomClap () {
//     document.querySelector('#som_tecla_clap').play();
// }




document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSplash(){
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSplash;





// tocaSomPom()

// tocaSomClap()


*/