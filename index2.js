
function cambia(id){
    immagine=document.getElementById(id);
    console.log(immagine.className);
    
    if(immagine.className==="icona1"){
        immagine.src="icona2.jpg";
        immagine.className="icona2";
    }else{
        immagine.src="icona1.jpg";
        immagine.className="icona1";
    }
  }