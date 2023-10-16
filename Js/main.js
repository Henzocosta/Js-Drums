function tocaSom(idElementAudio){
        document.querySelector(idElementAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

// Referencia Variavel no JS, se escreve let


for( let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template String
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);
    //'#som+{instrumento}'
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

}
