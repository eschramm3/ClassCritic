/*function httpGet(val)
{

    var checkLogInRequest = new XMLHttpRequest();
    
    checkLogInRequest.open("GET", "http://localhost:8080/courses/" + val, true); // false for synchronous request
    
    checkLogInRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	checkLogInRequest.addEventListener("load", ajaxCallback, false);
	//checkLogInRequest.send(null);

}




function ajaxCallback(event){
	console.log("EYYY");
	document.getElementById("wow").innerHTML=event.target.responseText;
//	userId = event.target.responseText;
	//printMonth();
}*/

const getProducts = () => { 
        $.ajax({
            type : "GET",
            contentType : "application/json",
            url : "http://localhost:8080/courses/1",
            dataType : 'json',
            timeout : 100000,
            success : function(data) {
                // now you have "data" which is in json format-same data that is displayed on browser.
            	console.log(data);
        	},
            error : function(e) {
                //do something
            },
            done : function(e) {
                //do something
            }
        });
    }


