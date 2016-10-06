$(document).ready(function(){
	//global
	var questions = ["Who is Yoda's master?", 'garden', 'sea', 'cat'],
	counter = 0;

	//Question 1
    
	//Pops up a box telling the User that they were correct and provides fact
    $("#guessButton").click(function(){
		var guess = $(".userGuess").text();
			console.log(guess);
			if (guess == "Darth Plagueis"){
				$("#questionOne").remove();
				$("#background").addClass("backgroundOne");
				$("#guessButton").remove();
				$("#messageBox").append("<span class='correctMessage'>Correct !</span><span class='fact'>Darth Plagueis was a male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge in the field of midi-chlorian manipulation, but was ultimately betrayed and murdered by his own apprentice, in accordance with the \"Rule of Two.\" Sidious later recounted the tale of his master's demise to lure Anakin Skywalker to the dark side.</span>").hide().fadeIn(1000);
				$("#userGuess").css("font-size", "2.5rem").hide().fadeIn(1000);
				$("#guessBox").css({
					"margin-top" : "4rem",
					"background-color" : "rgba(0, 0, 0, 0.8)"
				});
				$("#nextContainer").addClass("nextContainer").append("<span id='nextButton' class='nextButton'>Next <span class='fa fa-long-arrow-right spaceLeft'></span></span>");
			}
			//Tells User they were incorrect and provides fact
			else if (guess == "Darth Nihilus" || guess == "Exar Kun" || guess == "Valkorion" || guess == "Darth Bane") {
				$("#questionOne").remove();
				$("#background").addClass("backgroundOne");
				$("#guessButton").remove();
				$("#messageBox").append("<span class='incorrectMessage'>Incorrect</span><span class='fact'>The correct answer was Darth Plagueis. He was a male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge in the field of midi-chlorian manipulation, but was ultimately betrayed and murdered by his own apprentice, in accordance with the \"Rule of Two.\" Sidious later recounted the tale of his master's demise to lure Anakin Skywalker to the dark side.</span>").hide().fadeIn(1000);
				$("#userGuess").css("font-size", "2.5rem").hide().fadeIn(1000);
				$("#guessBox").css({
					"margin-top" : "4rem",
					"background-color" : "rgba(0, 0, 0, 0.8)"
				});
				$("#nextContainer").addClass("nextContainer").append("<span id='tooQuestion2' class='nextButton'>Next <span class='fa fa-long-arrow-right spaceLeft'></span></span>");
			}
		});

	//Pops up a box telling the user to click on an icon when one has not been selected
    $("#guessButton").click(function(){
		var guess = $(".userGuess").text();
			if (guess == "Select Icon"){
				$("#messageBox").append("<span id='warningMessage' class='warningMessage'><span class='fa fa-exclamation-triangle spaceRight'></span>Please Select an Icon</span>");
				//$("#message").addClass("fa fa-exclamation-triangle").append(" Please Select an Icon");
			}
		});

	//cyles through Questions Text placing them in the h1 element
    $("#guessButton").click(function (){
		var guess = $(".userGuess").text();
		if (counter >= questions.length || guess == "Select Icon") return; // the >= operator prevents the counter from resetting onece it cyles thorugh the whole quesiton when it reaches the length of the array.
		$("h1").empty().append(questions[counter]);
		counter = (counter + 1); // increments counter after displaying the string in position 0.
    });

    //goes to question two
    $("#tooQuestion2").click(function(){
    	$("#background-color").removeClass("backgroundOne");addClass()
    });


	//change classes on click
	$(".answerOne").click(function(click){
		$(".answerOne").addClass("onClick border2").removeClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".darthBane").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append("Darth Nihilus");
		$("#warningMessage").remove();
		$(".message").removeClass("fa fa-exclamation-triangle").empty();
	});
		$(".answerOne").mouseenter(function(){
			$(".answerOne").addClass('opacityFeature');	
		});

		$(".answerOne").mouseleave(function(){
			$(".answerOne").removeClass('opacityFeature');	
		});

	$(".answerTwo").click(function(click){
		$(".answerTwo").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append("Darth Plagueis");
		$("#warningMessage").remove();
		$(".message").removeClass("fa fa-exclamation-triangle").empty();
	});

		
		$(".answerTwo").mouseenter(function(){
			$(".answerTwo").addClass('opacityFeature');	
		});

		$(".answerTwo").mouseleave(function(){
			$(".answerTwo").removeClass('opacityFeature');	
		});

	$(".answerThree").click(function(click){
		$(".answerThree").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append("Exar Kun");
		$("#warningMessage").remove();
		$(".message").removeClass("fa fa-exclamation-triangle").empty();
	});

		$(".answerThree").mouseenter(function(){
			$(".answerThree").addClass('opacityFeature');	
		});

		$(".answerThree").mouseleave(function(){
			$(".answerThree").removeClass('opacityFeature');
		});

	$(".answerFour").click(function(click){
		$(".answerFour").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append("Valkorion");
		$("#warningMessage").remove();
		$(".message").removeClass("fa fa-exclamation-triangle").empty();
	});
		$(".answerFour").mouseenter(function(){
			$(".answerFour").addClass('opacityFeature');	
		});

		$(".answerFour").mouseleave(function(){
			$(".answerFour").removeClass('opacityFeature');	
		});

	$(".answerFive").click(function(click){
		$(".answerFive").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append("Darth Bane");
		$("#warningMessage").remove();
		$(".message").removeClass("fa fa-exclamation-triangle").empty();
	});

		$(".answerFive").mouseenter(function(){
			$(".answerFive").addClass('opacityFeature');	
		});

		$(".answerFive").mouseleave(function(){
			$(".answerFive").removeClass('opacityFeature');	
		});
});





