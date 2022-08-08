
function inputEncrypter(){
    let inputValue = document.getElementById("input_text").value;
    let str = inputValue.toLowerCase(); 
    let result = "";
    let letter = "";
    for(let i = 0; i < str.length; i++){
        letter = str[i];  
        if(letter === "a"){
            letter = letter + "i" 
        }if(letter ==="e"){
            letter = letter + "nter"
        }if(letter === "i"){
            letter = letter + "mes" 
        }if(letter === "o"){
            letter = letter + "ber" 
        }if(letter === "u"){
            letter = letter + "fat" 

        }
        result = result + letter;
                }

    document.getElementById("valueInput").innerHTML = result;
    
}

 function desencryp(){
    let str = document.getElementById("input_text").value;
    let stra = "";
     let stre = "";
      let stri = "";
       let stro = "";
        let stru = "";

    let regExA = /ai/g;
      let regExE = /enter/g;
       let regExI = /imes/g;
        let regExO = /ober/g;
         let regExU = /ufat/g;
stra = str.replace(regExA, "a");
stre = stra.replace(regExE, "e");
stri = stre.replace(regExI, "i");
stro = stri.replace(regExO, "o");
stru = stro.replace(regExU, "u");
   
document.getElementById("valueInput").innerHTML = stru;
}


var boton = document.getElementById("copiador");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  var enlace = document.getElementById("valueInput");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);

}


