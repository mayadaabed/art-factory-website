		
//scroll to top button
	function toTop(){
		document.body.scrollTop=0;
		document.documentElement.scrollTop=0;
	}
	var butop=document.getElementById('top');
	//window.onscroll=function(){scroll()};

	function scrolFunc(){
		if(document.body.scrollTop >20 || document.documentElement.scrollTop  >20){
			butop.style.display="block";

		}else{
			butop.style.display= "none";
		}
	}



//scroll indicator
	window.onscroll = function() {myFunction(); sticky() ; scrollFunc();};

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }


//sticky navbar
    var navbar = document.getElementById("main");
    var sticky = navbar.offsetTop;

    function sticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        }else{
            navbar.classList.remove("sticky");
        }
    }

//box activate
function reset(circle) {
	document.getElementById(circle).style.width="10px";
	document.getElementById(circle).style.height="10px";
	document.getElementById("img"+circle).style.backgroundColor="#1E90FF";
	document.getElementById("bt"+circle).style.backgroundColor="#1E90FF";
}

function activate(circle) {
	reset(1);reset(2);reset(3);
	document.getElementById(circle).style.width="15px";
	document.getElementById(circle).style.height="15px";
	document.getElementById("img"+circle).style.background="#4169E1";
	document.getElementById("bt"+circle).style.background="	#4169E1";
}

//email validation
	function validation() {
	var username= document.forms['myform']['name'].value;
	var email= document.forms['myform']['email'].value;
	// var d= document.getElementById('').value;
	if(username == "" || username== null){
		window.alert("User name must be fill");
		return false;
	}
	var uppercase= /[A-Z]/g;
	var lowercase= /[a-z]/g;
	var number= /[0-9]/g;

	if(email== "" || email== null){
		window.alert("email must contain @");
		return false;

	}else{
		if(!email.match("@") && email.match(lowercase) 
			&& email.match(number) && email.length>=5){
			window.alert("email invalid");
		return false;
		}
	}
}

 function reloadPage(){
        location.reload(true);
    }
//box active
// function click() {
// 	var dot=document.getElementById("circle");

// dot.onclick=document.getElementById("services").style='background-color:#00ced1;';
// dot.onclick=document.getElementById("button2").style='background-color:#00ced1;';
// }















