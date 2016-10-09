$(document).ready(function(){

	//Question 1
    
	//Pops up a box telling the User that they were correct and provides fact
$(function() {
$(document).keydown(function(e) {
	switch(e.which) { 
	case 13: // enter key
		$(".enterKeyPress").trigger("click")
		break; 
	} 
});
});

//Pops up a box telling the user to click on an icon when one has not been selected
    $(".guessButtonOne").click(function(){
		var guess = $(".userGuess").text();
			if (guess == "Select Icon"){
				$("#warningMessage").append("<span id='warningMessage' class='warningMessage'><span class='fa fa-exclamation-triangle spaceRight'></span>Please Select an Icon</span>");
			}
		});

//Series of Events that happen when user submits answer

	$(".guessButtonOne").click(function(){
		var guess = $(".userGuess").text();
			if (guess == "Darth Nihilus") {
				$("#userAnswerOneText").empty().append("Darth Nihilus");
				$("#userAnswerOne").removeClass("backgroundOpacity").addClass("darthNihilusFooterIMG");
			}
			else if (guess == "Darth Plagueis") {
				$("#userAnswerOneText").empty().append("Darth Plagueis");
				$("#userAnswerOne").removeClass("backgroundOpacity").addClass("darthPlagueisFooterIMG");
			}
			else if (guess == "Exar Kun") {
				$("#userAnswerOneText").empty().append("Exar Kun");
				$("#userAnswerOne").removeClass("backgroundOpacity").addClass("exarKunFooterIMG");
			}
			else if (guess == "Valkorion") {
				$("#userAnswerOneText").empty().append("Valkorion");
				$("#userAnswerOne").removeClass("backgroundOpacity").addClass("valkorionFooterIMG");
			}
			else if (guess == "Darth Bane") {
				$("#userAnswerOneText").empty().append("Darth Bane");
				$("#userAnswerOne").removeClass("backgroundOpacity").addClass("darthBaneFooterIMG");
			}
	});

    $(".guessButtonOne").click(function(){
		var guess = $(".userGuess").text();
			if (guess == "Darth Plagueis"){
				$(".guessButtonOne").hide();
				$("#guessButton").removeClass("enterKeyPress");
				$("#nextButton").addClass("enterKeyPress");
				$("#header").empty();
				$("#absoluteMessageContainer").hide().fadeIn(1000);
				$("#incorrectMessage").removeClass("incorrectMessage").addClass("correctMessage").empty().append("Correct !");
				$(".fact").empty().append("Darth Plagueis was a male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge in the field of midi-chlorian manipulation, but was ultimately betrayed and murdered by his own apprentice, in accordance with the \"Rule of Two.\" Sidious later recounted the tale of his master's demise to lure Anakin Skywalker to the dark side.");
				$("#userGuess").removeClass("userGuess").addClass("userGuessFontChange").hide().fadeIn(1000);
				$("#guessBox").addClass("guessBoxCorrect guessBoxOnSubmit").removeClass("guessBox").appendTo("#moveUserGuess");
				$("#answerOne").removeClass("answerOne").addClass("opacityFeature");
				$("#answerTwo").removeClass("answerTwo").addClass("opacityFeature");
				$("#answerThree").removeClass("answerThree").addClass("opacityFeature");
				$("#answerFour").removeClass("answerFour").addClass("opacityFeature");
				$("#answerFive").removeClass("answerFive").addClass("opacityFeature");
			}

//Tells User they were incorrect and provides fact
			else if (guess == "Darth Nihilus" || guess == "Exar Kun" || guess == "Valkorion" || guess == "Darth Bane") {
				$(".guessButtonOne").hide();
				$("#guessButton").removeClass("enterKeyPress");
				$("#nextButton").addClass("enterKeyPress");
				$("#header").empty();
				$("#absoluteMessageContainer").hide().fadeIn(1000);
				$("#userGuess").removeClass("userGuess").addClass("userGuessFontChange").hide().fadeIn(1000);
				$("#guessBox").addClass("guessBoxIncorrect").appendTo("#moveUserGuess");
				$("#answerOne").removeClass("answerOne").addClass("opacityFeature");
				$("#answerTwo").removeClass("answerTwo").addClass("opacityFeature");
				$("#answerThree").removeClass("answerThree").addClass("opacityFeature");
				$("#answerFour").removeClass("answerFour").addClass("opacityFeature");
				$("#answerFive").removeClass("answerFive").addClass("opacityFeature");
			}
		});

    //goes to question two
    $(".tooQuestionTwo").click(function(){
		$("#nextButton").removeClass("enterKeyPress");
		$("#guessButton").addClass("enterKeyPress");
    	$("#absoluteMessageContainer").fadeOut(500, function(){
    		//Answer One	
    			$("#answerOne").removeClass("opacityFeature onClick border2").addClass("answerOne border");
    			$("#imageOne").removeClass("darthNihilusIMG").addClass("bethAllusisIMG");
    			$("#textOne").empty().append("Beth Allusis");
    		//Answer Two	
    			$("#answerTwo").removeClass("opacityFeature onClick border2").addClass("answerTwo border");
    			$("#imageTwo").removeClass("darthPlagueisIMG").addClass("odanUrrIMG");
    			$("#textTwo").empty().append("Odan Urr");
    		//Answer Three	
    			$("#answerThree").removeClass("opacityFeature onClick border2").addClass("answerThree border");
    			$("#imageThree").removeClass("exarKunIMG").addClass("lordHothIMG");
    			$("#textThree").empty().append("Lord Hoth");
    		//Answer Four	
    			$("#answerFour").removeClass("opacityFeature onClick border2").addClass("answerFour border");
    			$("#imageFour").removeClass("valkorionIMG").addClass("delGormoIMG");
    			$("#textFour").empty().removeClass("optionText").addClass("optionTextGormo").append("N'Kata Del Gormo");
    		//Answer Five	
    			$("#answerFive").removeClass("opacityFeature onClick border2").addClass("answerFive border");
    			$("#imageFive").removeClass("darthBaneIMG").addClass("sateleShanIMG");
    			$("#textFive").empty().addClass("letterBlack").append("Satele Shan");
    		//Adjusting Positioning for Footer
    			$("#questionOne").removeClass("questionOne").addClass("questionOneAdjustForFooter");
    			$("#questionContainer").removeClass("questionContainer").addClass("questionContainerAdjustForFooter");
    		});
    	$("#guessBox").fadeOut(500, function(){
    		$("#guessBox").appendTo("#guessBoxContainer").removeClass("guessBoxIncorrect guessBoxCorrect guessBoxOnSubmit").addClass("guessBoxAdjustForFooter").delay(100).fadeIn(500);
    		});
		$("#footer").hide().delay(600).fadeIn(500);
    	$("#userGuess").empty().append("Select Icon").removeClass("userGuessFontChange").addClass("userGuess");
    	$(".guessButtonOne").delay(600).fadeIn(500);
    	$("#guessButton").removeClass("guessButtonOne").addClass("guessButtonTwo");
    	$("#header").hide().append("Who was Yoda's Jedi Master?").delay(600).fadeIn(500);
    	$("#answers").fadeOut(500).delay(100).fadeIn(500);
    });


	//change classes on click
	$(".answerOne").click(function(click){
		var text = $("#textOne").text();
		$(".answerOne").addClass("onClick border2").removeClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".darthBane").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append(text);
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
		var text = $("#textTwo").text();
		$(".answerTwo").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append(text);
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
		var text = $("#textThree").text();
		$(".answerThree").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append(text);
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
		var text = $("#textFour").text();
		$(".answerFour").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFive").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append(text);
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
		var text = $("#textFive").text();
		$(".answerFive").addClass("onClick border2").removeClass("border");
		$(".answerOne").removeClass("onClick border2").addClass("border");
		$(".answerTwo").removeClass("onClick border2").addClass("border");
		$(".answerThree").removeClass("onClick border2").addClass("border");
		$(".answerFour").removeClass("onClick border2").addClass("border");
		$(".userGuess").empty().append(text);
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





