$(document).ready(function(){

//enter keypress selector (this enables me to add the class .enterKeyPress anywhere for this to apply)

$(document).keypress(function(e){
	if(e.keyCode == 13){  // the enter key code 
    $(".enterKeyPress").trigger('click'); 
  }
});

//hover functionality
	$(".answerOne").click(function(){
		var guess = $("#textOne").text();
		$(".answerOne").fadeTo(300, 0.5).addClass("borderOnClick").removeClass("answerOneOpacity");
		$("#userGuess").empty().append(guess);
		$(".warningMessage").hide();
		$(".answerTwo").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerTwoOpacity");
		$(".answerThree").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerThreeOpacity");
		$(".answerFour").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerfourOpacity");
		$(".answerFive").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFiveOpacity");
	});

	//Fades Hovered over Answer
		$(".answerOneOpacity").mouseenter(function(){
			$(".answerOneOpacity").fadeTo(300, 0.7);
		});

		$(".answerOneOpacity").mouseleave(function(){
			$(".answerOneOpacity").fadeTo(300, 1);
		});

	$(".answerTwo").click(function(){
		var guess = $("#textTwo").text();
		$(".answerTwo").fadeTo(300, 0.5).addClass("borderOnClick").removeClass("answerTwoOpacity");
		$("#userGuess").empty().append(guess);
		$(".warningMessage").hide();
		$(".answerOne").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerOneOpacity");
		$(".answerThree").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerThreeOpacity");
		$(".answerFour").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFourOpacity");
		$(".answerFive").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFiveOpacity");
	});

	//Fades Hovered over Answer
		$(".answerTwoOpacity").mouseenter(function(){
			$(".answerTwoOpacity").fadeTo(300, 0.7);
		});

		$(".answerTwoOpacity").mouseleave(function(){
			$(".answerTwoOpacity").fadeTo(300, 1);
		});

	$(".answerThree").click(function(){
		var guess = $("#textThree").text();
		$(".answerThree").fadeTo(500, 0.5).addClass("borderOnClick").removeClass("answerThreeOpacity");
		$("#userGuess").empty().append(guess);
		$(".warningMessage").hide();
		$(".answerOne").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerOneOpacity");
		$(".answerTwo").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerTwoOpacity");
		$(".answerFour").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFourOpacity");
		$(".answerFive").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFiveOpacity");
	});

	//Fades Hovered over Answer
		$(".answerThreeOpacity").mouseenter(function(){
			$(".answerThreeOpacity").fadeTo(300, 0.7);
		});

		$(".answerThreeOpacity").mouseleave(function(){
			$(".answerThreeOpacity").fadeTo(300, 1);
		});

	$(".answerFour").click(function(){
		var guess = $("#textFour").text();
		$(".answerFour").fadeTo(500, 0.5).addClass("borderOnClick").removeClass("answerFourOpacity");
		$("#userGuess").empty().append(guess);
		$(".warningMessage").hide();
		$(".answerOne").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerOneOpacity");
		$(".answerTwo").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerTwoOpacity");
		$(".answerThree").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerThreeOpacity");
		$(".answerFive").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFiveOpacity");
	});

	//Fades Hovered over Answer
		$(".answerFourOpacity").mouseenter(function(){
			$(".answerFourOpacity").fadeTo(300, 0.7);
		});

		$(".answerFourOpacity").mouseleave(function(){
			$(".answerFourOpacity").fadeTo(300, 1);
		});

	$(".answerFive").click(function(){
		var guess = $("#textFive").text();
		$(".answerFive").fadeTo(500, 0.5).addClass("borderOnClick").removeClass("answerFiveOpacity");
		$("#userGuess").empty().append(guess);
		$(".warningMessage").hide();
		$(".answerOne").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerOneOpacity");
		$(".answerTwo").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerTwoOpacity");
		$(".answerThree").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerThreeOpacity");
		$(".answerFour").removeClass("borderOnClick").fadeTo(500, 1).addClass("answerFourOpacity");
	});

	//Fades Hovered over Answer
		$(".answerFiveOpacity").mouseenter(function(){
			$(".answerFiveOpacity").fadeTo(300, 0.7);
		});

		$(".answerFiveOpacity").mouseleave(function(){
			$(".answerFiveOpacity").fadeTo(300, 1);
		});

//button clicking

	//Right wrong functionality
	$("#guessButtonOne").click(function(){
		var guess = $("#userGuess").text();
		if (guess == "Darth Plagueis"){
			console.log(guess);
			$("#guessButtonOne").remove(); //Removes Submit Button and Replaces with One for Next Question
			$("#guessBox").append("<div id='guessButtonTwo' class='guessButton'>Submit</div>"); //Removes Submit Button and Replaces with One for Next Question
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty().hide();
			$("#absoluteMessageContainer").show();
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");

		}
		else if (guess == "Darth Nihilus" || guess == "Exar Kun" || guess == "Valkorion" || guess == "Darth Bane") {
			$("#guessButtonOne").remove(); //Removes Submit Button and Replaces with One for Next Question
			$("#guessBox").append("<div id='guessButtonTwo' class='guessButton'>Submit</div>"); //Removes Submit Button and Replaces with One for Next Question
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty().hide();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#fact").empty().append("The correct answer was Darth Plagueis, he was a male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge in the field of midi-chlorian manipulation, but was ultimately betrayed and murdered by his own apprentice, in accordance with the \"Rule of Two.\" Sidious later recounted the tale of his master's demise to lure Anakin Skywalker to the dark side.")
			$("#absoluteMessageContainer").show();
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
		}
	});

	//displays warning if nothing is selected
	$("#guessButtonOne").click(function(){
		var guess = $("#userGuess").text();
		if (guess == "Select Icon"){
			$(".warningMessage").show();
		}
	});

	//goes to question two
	$("#nextButtonOne").click(function(){
		$()
	});
});



