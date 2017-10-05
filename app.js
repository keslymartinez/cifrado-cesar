function caesar(cipher,decipher){
	do{
		var res = prompt ("Ingrese el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");// pregunto por  una frase al usuario
			if(res == "1"){
				cipher(res);
			}else if (res == "2"){
				decipher(request);
			}else{
				alert("Ingrese una opción válida"); 
			}
		}
	} while (res = "" || (res!= "1" && res != "2"));
}

function cipher(text, shift=33){
   var farse1 = prompt ("Ingrese una frase para cifrar");
   var cifra="";
   for(var i of frase1){
    
       
   }
   return alert("Su frase cifrada es " + cod);
}

function decipher(text, shift=33){
   var frase2 = prompt("Ingrese una frase para descifrar");
   var desifrar"";
   for (var i of frse2) {
       var desifrar = i.charCodeAt(0) - shift;
     