
function setTimer() {
    c2_callFunction("setTimer", [120]);//call function "setTimer" in game with parameter 0 as value in seconds
    //c2_callFunction("deleteFruit"<?php echo json_encode($my_var); ?>);//call function "deleteFruit" in game. this function to reset total fruit in game
    
    }
function getScore(x, userid) {
    var totalScore = x ;//get score by element in game
    console.log('total Score '+totalScore+" "+userid);//log
	

	/*window.setTimeout(
	function(){ window.location.href = "http://www.google.com"; },3000
	
	);*/
	 location.replace("http://www.google.com");
    }
	
