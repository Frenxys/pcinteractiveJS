document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    stampaImmagini(document.getElementById("righe").value,document.getElementById("colonne").value);
  });
  let conta=0;
  immagini=document.getElementById("immagini");
  function stampaImmagini(val1,val2){
    if(val1==0 || val2==0){
        alert("non inserire 0");
    }
    for(let i=0; i<val1; i++){
        div=document.createElement('div');
        for(let i=0; i<val2; i++){
            let immagine=document.createElement('img');
            immagine.src="icona3.png";
            immagine.width="100";
            immagine.id=conta;
            conta++;
            immagine.height="100";
            immagine.onclick = function() {
                cambia(this);
                };
            
            div.appendChild(immagine);
            
        }
        immagini.appendChild(div);
    }
    
  }
function cambia(immagine){
    console.log(immagine.className);
    
    if(immagine.className==="icona4"){
        immagine.src="icona3.png";
        immagine.className="icona3";
    }else{
        immagine.src="icona4.png";
        immagine.className="icona4";
    }
}