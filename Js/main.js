function tocaSom(seletorAudio){
      const elemento =  document.querySelector(seletorAudio);
     
      if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
        } else{
            console.log('Elemento não encontrado ou Seletor invalido');
        }
      
      
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
    }
    
    tecla.onkeydown = function (evento){

        // console.log(evento.code == 'Space');

      if(evento.code === 'Space' || evento.code ==='Enter'){
          tecla.classList.add('ativa');

      }
     
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
