
let name = "sanket jadhav";
	 
	 function capitalize(){
		 let convertStringToArray = name.split(" ");
		 
		 for(let i=0; i<convertStringToArray.length; i++){
			 convertStringToArray[i] = convertStringToArray[i].charAt(0).toUpperCase()+convertStringToArray[i].slice(1);
		 }
		 
		 
		document.write(convertStringToArray.join(" "));
	 }
	 
	 
	 capitalize();
	 
	 
	
// function CapitalizeALLLetter(){
		// let string="Sanket";
		
		// console.log(string.replace( string.toUpperCase()));
	// }
	
// CapitalizeALLLetter();