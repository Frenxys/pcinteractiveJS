
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    stampaImmagini(document.getElementById("righe").value,document.getElementById("colonne").value);
  });

  function stampaImmagini(righe,colonne){
    immagini=document.getElementById("immagini");
    let conta=0;
    for(let j=0; j<righe; j++){
        for(let i=0; i<colonne; i++){
            conta++;
            if(i%colonne==0){
                immagini.innerHTML+="<br>";
            }
            let immagine=document.createElement('img');
            immagine.onclick = function() { cambia(this.id); };
            immagine.src="icona1.jpg";
            immagine.width="100";
            immagine.id=conta;
            immagine.height="100";
            immagine.className="immagine1";
            immagini.appendChild(immagine);
        }
    }
    
  }


  function cambia(id){
    immagine=document.getElementById(id);
    console.log(immagine.className);
    
    if(immagine.className==="immagine1"){
        immagine.src="icona2.jpg";
        immagine.className="immagine2";
    }else{
        immagine.src="icona1.jpg";
        immagine.className="immagine1";
    }
  }





  
