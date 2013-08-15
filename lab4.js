

		var inputData = {
			'mousex' : [],
			'mousey':[],
			'title' : "",
			'name':"",
			'email':"",
			'innerWidth':"",
			'innerHeight':"",
			'userAgent':""
	};

		function displayResults() {
			console.clear();
			console.log(inputData);
	};

	var results= document.getElementById("displayResults");
	results.addEventListener("click", displayResults);

	//function onblur {};


		function name (event){
			console.log(event)
		
		};
		window.addEventListener('load',name);
		


	/* window onload*/	 
		function onWindowLoad() {
			inputData.title = document.title;
			inputData.innerWidth = window.innerWidth + "," + window.innerHeight;
			inputData.userAgent = window.navigator.userAgent;
		}
		
		window.addEventListener('load', onWindowLoad);
		
		/*on mouse move*/
		function onMouseMove(event){
			inputData.mousex.push(event.clientX);
			inputData.mousey.push(event.clienty);
			
			
			if ( inputData.mousex.length > 100 ) {
				document.removeEventListener('mousemove', onMouseMove);
			}
		
	}

		document.addEventListener('mousemove', onMouseMove);
	

	
		var fullname= document.getElementById("fullname");
		
	function fullNameBlur() {
		inputData.name = fullname.value;
	}
		
	fullname.addEventListener("blur", fullNameBlur);
	
	var email=document.getElementbyId("email");
	
function emailBlur() {
		inputData.name = email.value;
	}
		
	email.addEventListener("blur", emailBlur);






