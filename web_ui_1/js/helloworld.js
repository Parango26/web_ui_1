


//Funcion para interactuar con un AJAX
function sumitButom(){
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	listUl = document.getElementById("list");
	       // Typical action to be performed when the document is ready:
	        document.getElementById('h1HelloWorldId').style.background='#FFFFFF';
	    	document.getElementById('h1HelloWorldId').text="Salut! Monde";
	    	console.log(this);

	    	var data = JSON.parse(this.response);
	    	var ils ;
			data.items.forEach(elem => {  
				ils = ils+ "<li>"+elem.id+" "+elem.name+"</li>";
				
			});

			listUl.innerHTML = ils;

	    }else if(this.status == 500){
	    	document.getElementById('h1HelloWorldId').style.background='#B40431';
	    	document.getElementById('h1HelloWorldId').text="Error";
	    }
	};
	xhttp.open("GET", "https://api.github.com/search/repositories?q=JavaScript", true);
	xhttp.send();
}