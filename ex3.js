
	function validerForm(){
		var x = document.forms["Maforme"]["txt"].value;
		var para = document.getElementById('message');
		  if (x !== "") {
		    //alert("il faut remplir le champs");
			para.innerText='good job!';
		   
		  }
		  else{para.innerText='il faut remplir le champs!';}

		   return false;
	}



