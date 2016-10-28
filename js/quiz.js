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
			$("#guessButtonOne").remove();
			$("#nextButtonOne").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");

		}
		else if (guess == "Darth Nihilus" || guess == "Exar Kun" || guess == "Valkorion" || guess == "Darth Bane") {
			$("#guessButtonOne").remove(); //Removes Submit Button and Replaces with One for Next Question
			$("#nextButtonOne").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#fact").empty().append("The correct answer was Darth Plagueis, he was a male Dark Lord of the Sith and the master of Darth Sidious. He acquired considerable knowledge in the field of midi-chlorian manipulation, but was ultimately betrayed and murdered by his own apprentice, in accordance with the \"Rule of Two.\" Sidious later recounted the tale of his master's demise to lure Anakin Skywalker to the dark side.")
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
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
		var guess = $("#userGuess").text();
		if (guess == "Darth Nihilus") {
			$("#userAnswerOne").addClass("darthNihilusFooterIMG").removeClass("opacityFeature");
				$("#userAnswerOneText").empty().append("Darth Nihilus");
			$("#finalOne").addClass("darthNihilusFooterIMG");
			$("#finalTextOne").empty().append("Darth Nihilus");
		}
		else if (guess == "Darth Plagueis") {
			$("#userAnswerOne").addClass("darthPlagueisFooterIMG").removeClass("opacityFeature");
				$("#userAnswerOneText").empty().append("Darth Plagueis");
			$("#finalOne").addClass("darthPlagueisFooterIMG");
			$("#finalTextOne").empty().append("Darth Plagueis");
		}
		else if (guess == "Exar Kun") {
			$("#userAnswerOne").addClass("exarKunFooterIMG").removeClass("opacityFeature");
				$("#userAnswerOneText").empty().append("Exar Kun");
			$("#finalOne").addClass("exarKunFooterIMG");
			$("#finalTextOne").empty().append("Exar Kun");
		}
		else if (guess == "Valkorion") {
			$("#userAnswerOne").addClass("valkorionFooterIMG").removeClass("opacityFeature");
				$("#userAnswerOneText").empty().append("Valkorion");
			$("#finalOne").addClass("valkorionFooterIMG");
			$("#finalTextOne").empty().append("Valkorion");
		}
		else if (guess == "Darth Bane") {
			$("#userAnswerOne").addClass("darthBaneFooterIMG").removeClass("opacityFeature");
				$("#userAnswerOneText").empty().append("Darth Bane");
			$("#finalOne").addClass("darthBaneFooterIMG");
			$("#finalTextOne").empty().append("Darth Bane");
		}
	});


//Goes To Questin Two
	$("#nextButtonOne").click(function(){
		$("#nextButtonOne").fadeOut(500, function(){
			$("#nextButtonOne").remove();
		});
		$("#questionContainer").fadeOut(500, function(){
			$("#userGuess").remove();
			$(".borderOnClick").fadeTo(10, 1);
			$("#header").append("Who was Yoda's Master?");
			$("#answerOne").removeClass("borderOnClick").addClass("answerOne answerOneOpacity");
				$("#imageOne").removeClass("darthNihilusIMG").addClass("bethAllusisIMG");
				$("#textOne").empty().append("Beth Allusis");
			$("#answerTwo").removeClass("borderOnClick").addClass("answerTwo answerTwoOpacity");
				$("#imageTwo").removeClass("darthPlagueisIMG").addClass("lordHothIMG");
				$("#textTwo").empty().append("Lord Hoth");
			$("#answerThree").removeClass("borderOnClick").addClass("answerThree answerThreeOpacity");
				$("#imageThree").removeClass("exarKunIMG").addClass("delGormoIMG");
				$("#textThree").empty().append("N'Kata Del Gormo").addClass("textDelGormo");
			$("#answerFour").removeClass("borderOnClick").addClass("answerFour answerFourOpacity");
				$("#imageFour").removeClass("valkorionIMG").addClass("odanUrrIMG");
				$("#textFour").empty().append("Odan Urr");
			$("#answerFive").removeClass("borderOnClick").addClass("answerFive answerFiveOpacity");
				$("#imageFive").removeClass("darthBaneIMG").addClass("sateleShanIMG");
				$("#textFive").empty().append("<span class='blackLetter'>S</span>atele Shan");
		});
		$("#absoluteMessageContainer").addClass("absoluteMessageContainerDelGormo").fadeOut(500, function(){
			$("#message").remove();
			$("#fact").remove();
			$("#messageBox").append("<span id='message' class='correctMessage'>Correct !</span><span id='fact' class='fact factDelGormo questionTwoFact'>According to legend N'Kata Del Gormo a four limbed, serpentine Jedi was residing on a swamp world when two visitors crossed his path; a young hermit named Yoda and a human friend whom had crash landed on the world. They came to Del Gormo for assistance and he recognized and began their training as Jedi. Sometime later, a Galactic Republic starship landed on the planet, answering the distress call that had been sent from Yoda's ship before the crash. Departing the world, Yoda would go  to Coruscant where he would continue his training at the Jedi Temple, eventually ascending to the rank  of Grand Master.</span>");
			$("#nextContainer").append("<span id='nextButtonTwo' class='nextButton'>Next<span class='fa fa-long-arrow-right'></span></span>");//adds new next button
		});
		$("#footer").delay(500).fadeIn(500);
		$("#questionContainer").fadeTo(10, 1).fadeIn(500);
		$("<div id='userGuess' class='userGuess'>Select Icon</div><div id='guessButtonTwo' class='guessButton enterKeyPress'>Submit</div>").hide().appendTo("#guessBox").delay(500).fadeIn(500);
	});

//shows warning sign if the submit button is clicked and no icon has been selected

	$(document).on('click', '#guessButtonTwo', function(){
		var guess = $("#userGuess").text();
		if (guess == "Select Icon"){
			$(".warningMessage").show();
		}
	});

	
//right/wrong functionality

	$(document).on('click', '#guessButtonTwo', function(){
		var guess = $("#userGuess").text();
		if (guess == "N'Kata Del Gormo"){
			$("#guessButtonTwo").remove();
			$("#nextButtonTwo").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "N'Kata Del Gormo") {
					$("#userAnswerTwo").addClass("delGormoFooterIMG").removeClass("opacityFeature");
					$("#userAnswerTwoText").empty().append("<span class='blackLetter'>N'</span>Kat<span class='blackLetter'>a Del Gor</span>mo");
					$("#finalTwo").addClass("delGormoFooterIMG");
					$("#finalTextTwo").empty().append("N'Kata <span class='blackLetter'>Del Gormo</span>");
				}
			});
		}
		else if (guess == "Beth Allusis" || guess == "Lord Hoth" || guess == "Odan Urr" || guess == "Satele Shan"){
			$("#guessButtonTwo").remove();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#nextButtonTwo").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Beth Allusis"){
					$("#userAnswerTwo").addClass("bethAllusisFooterIMG").removeClass("opacityFeature");
					$("#userAnswerTwoText").empty().append("Beth Allusis");
					$("#finalTwo").addClass("bethAllusisFooterIMG");
					$("#finalTextTwo").empty().append("Beth Allusis");
				}
				else if (guess == "Lord Hoth") {
					$("#userAnswerTwo").addClass("lordHothFooterIMG").removeClass("opacityFeature");
					$("#userAnswerTwoText").empty().append("Lord Hoth");
					$("#finalTwo").addClass("lordHothFooterIMG");
					$("#finalTextTwo").empty().append("Lord Hoth");
				}
				else if (guess == "Odan Urr") {
					$("#userAnswerTwo").addClass("odanUrrFooterIMG").removeClass("opacityFeature");
					$("#userAnswerTwoText").empty().append("<span class='blackLetter'>Oda</span>n Urr");
					$("#finalTwo").addClass("odanUrrFooterIMG");
					$("#finalTextTwo").empty().append("Odan Urr");
				}
				else if (guess == "Satele Shan") {
					$("#userAnswerTwo").addClass("sateleShanFooterIMG").removeClass("opacityFeature");
					$("#userAnswerTwoText").empty().append("Satele Sh<span class='blackLetter'>an</span>");
					$("#finalTwo").addClass("sateleShanFooterIMG");
					$("#finalTextTwo").empty().append("Satele Shan");
				}
			});
		}
	});


//Goes To Quesiton Three	
	$(document).on('click', '#nextButtonTwo', function(){
		console.log("clicked");
		$("#nextButtonTwo").fadeOut(500, function(){
			$("#nextButtonTwo").remove();
		});
		$("#questionContainer").fadeOut(500, function(){
			$("#userGuess").remove();
			$(".borderOnClick").fadeTo(10, 1);
			$("#header").addClass("headerBountyHunters").append("Which of these bounty hunters specialized in killing Jedi?");
			$("#answerOne").removeClass("borderOnClick").addClass("answerOne answerOneOpacity");
				$("#imageOne").removeClass("bethAllusisIMG").addClass("aurraSingIMG");
				$("#textOne").empty().append("Aurra Sing");
			$("#answerTwo").removeClass("borderOnClick").addClass("answerTwo answerTwoOpacity");
				$("#imageTwo").removeClass("lordHothIMG").addClass("bobaFettIMG");
				$("#textTwo").empty().append("Boba Fett");
			$("#answerThree").removeClass("borderOnClick").addClass("answerThree answerThreeOpacity");
				$("#imageThree").removeClass("delGormoIMG").addClass("boskIMG");
				$("#textThree").empty().append("Bosk").removeClass("textDelGormo");
			$("#answerFour").removeClass("borderOnClick").addClass("answerFour answerFourOpacity");
				$("#imageFour").removeClass("odanUrrIMG").addClass("cadBaneIMG");
				$("#textFour").empty().append("Cad Bane");
			$("#answerFive").removeClass("borderOnClick").addClass("answerFive answerFiveOpacity");
				$("#imageFive").removeClass("sateleShanIMG").addClass("dengarIMG");
				$("#textFive").empty().append("Denga<span class='blackLetter'>r</span>");
		});
		$("#absoluteMessageContainer").addClass("absoluteMessageContainerDelGormo").fadeOut(500, function(){
			$("#message").remove();
			$("#fact").remove();
			$("#messageBox").append("<span id='message' class='correctMessage'>Correct !</span><span id='fact' class='fact factCadBane questionThreeFact'>Cad Bane was a Duros male bounty hunter who came to prominence in the galaxy during the Clone Wars due to the death of Jango Fett at the Battle of Geonosis. He specialized in fighting Jedi and earned a reputation as the galaxy’s best, deadliest, and most fearsome mercenary during the Cone Wars. Though he worked for a number of clients, his loyalty was ultimately to credits and by extension, the highest bidder.  His renown attracted the attention of Count Dooku and eventually the Dark Lord of the Sith, Darth Sidious, the latter of whom employed Bane in pursuit of his own means numerous times.</span>");
			$("#nextContainer").append("<span id='nextButtonThree' class='nextButton'>Next<span class='fa fa-long-arrow-right'></span></span>");//adds new next button
		});
		$("#footer").delay(500).fadeTo (500, 1);
		$("#questionContainer").fadeTo(10, 1).fadeIn(500);
		$("<div id='userGuess' class='userGuess'>Select Icon</div><div id='guessButtonThree' class='guessButton enterKeyPress'>Submit</div>").hide().appendTo("#guessBox").delay(500).fadeIn(500);
	});

//shows warning sign if the submit button is clicked and no icon has been selected

	$(document).on('click', '#guessButtonThree', function(){
		var guess = $("#userGuess").text();
		if (guess == "Select Icon"){
			$(".warningMessage").show();
		}
	});

//right/wrong functionality

	$(document).on('click', '#guessButtonThree', function(){
		var guess = $("#userGuess").text();
		if (guess == "Cad Bane"){
			$("#guessButtonThree").remove();
			$("#nextButtonThree").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Cad Bane") {
					$("#userAnswerThree").addClass("cadBaneFooterIMG").removeClass("opacityFeature");
					$("#userAnswerThreeText").empty().append("Cad Bane");
					$("#finalThree").addClass("cadBaneFooterIMG");
					$("#finalTextThree").empty().append("Cad Bane");
				}
			});
		}
		else if (guess == "Aurra Sing" || guess == "Boba Fett" || guess == "Bosk" || guess == "Dengar"){
			$("#guessButtonThree").remove();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#nextButtonThree").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#fact").empty().append("The correct answer was Cad Bane, he was a Duros male bounty hunter who came to prominence in the galaxy during the Clone Wars due to the death of Jango Fett at the Battle of Geonosis. He specialized in fighting Jedi and earned a reputation as the galaxy’s best, deadliest, and most fearsome mercenary during the Cone Wars. Though he worked for a number of clients, his loyalty was ultimately to credits and by extension, the highest bidder.  His renown attracted the attention of Count Dooku and eventually the Dark Lord of the Sith, Darth Sidious, the latter of whom employed Bane in pursuit of his own means numerous times.");
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Aurra Sing"){
					$("#userAnswerThree").addClass("aurraSingFooterIMG").removeClass("opacityFeature");
					$("#userAnswerThreeText").empty().append("Aur<span class='blackLetter'>ra</span> Sing");
					$("#finalThree").addClass("aurraSingFooterIMG");
					$("#finalTextThree").empty().append("Aurra Sing");
				}
				else if (guess == "Boba Fett") {
					$("#userAnswerThree").addClass("bobaFettFooterIMG").removeClass("opacityFeature");
					$("#userAnswerThreeText").empty().append("Boba Fett");
					$("#finalThree").addClass("bobaFettFooterIMG");
					$("#finalTextThree").empty().append("Boba Fett");
				}
				else if (guess == "Bosk") {
					$("#userAnswerThree").addClass("boskFooterIMG").removeClass("opacityFeature");
					$("#userAnswerThreeText").empty().append("Bo<span class='blackLetter'>sk</span>");
					$("#finalThree").addClass("boskFooterIMG");
					$("#finalTextThree").empty().append("Bosk");
				}
				else if (guess == "Dengar") {
					$("#userAnswerThree").addClass("dengarFooterIMG").removeClass("opacityFeature");
					$("#userAnswerThreeText").empty().append("Dengar");
					$("#finalThree").addClass("dengarFooterIMG");
					$("#finalTextThree").empty().append("Dengar");
				}
			});
		}
	});

//Goes To Question Four
	$(document).on('click', '#nextButtonThree', function(){
		console.log("clicked");
		$("#nextButtonThree").fadeOut(500, function(){
			$("#nextButtonThree").remove();
		});
		$("#questionContainer").fadeOut(500, function(){
			$("#userGuess").remove();
			$(".borderOnClick").fadeTo(10, 1);
			$("#header").removeClass("headerBountyHunters").addClass("headerCreatures").append("Which of these creatures is from the planet Kessel?");
			$("#answerOne").removeClass("borderOnClick").addClass("answerOne answerOneOpacity");
				$("#imageOne").removeClass("aurraSingIMG").addClass("acklayIMG");
				$("#textOne").empty().append("Ac<span class='blackLetter'>k</span>lay");
			$("#answerTwo").removeClass("borderOnClick").addClass("answerTwo answerTwoOpacity");
				$("#imageTwo").removeClass("bobaFettIMG").addClass("bogaIMG");
				$("#textTwo").empty().append("Boga");
			$("#answerThree").removeClass("borderOnClick").addClass("answerThree answerThreeOpacity");
				$("#imageThree").removeClass("boskIMG").addClass("energySpiderIMG");
				$("#textThree").empty().append("Energy Spider");
			$("#answerFour").removeClass("borderOnClick").addClass("answerFour answerFourOpacity");
				$("#imageFour").removeClass("cadBaneIMG").addClass("kraytDragonIMG");
				$("#textFour").empty().append("Krayt Dragon");
			$("#answerFive").removeClass("borderOnClick").addClass("answerFive answerFiveOpacity");
				$("#imageFive").removeClass("dengarIMG").addClass("rishiEelIMG");
				$("#textFive").empty().append("Rishi Eel");
		});
		$("#absoluteMessageContainer").addClass("absoluteMessageContainerDelGormo").fadeOut(500, function(){
			$("#message").remove();
			$("#fact").remove();
			$("#messageBox").append("<span id='message' class='correctMessage'>Correct !</span><span id='fact' class='fact factCadBane questionFourFact'>Energy spiders or spice spiders were arachnids that inhabited the spice mines of Kessel. They lived in complete darkness inside the mine's caves spinning webs made of glitterstim, a  rare kind of spice. The spiders would shoot webbing from their mouths to capture prey, impale them and then quickly suck the life energy from them. The spiders were known to feed on bogeys, as they were sources of pure energy that caused the glitterstim to react and produce light, alerting the spiders to their presence.</span>");
			$("#nextContainer").append("<span id='nextButtonFour' class='nextButton'>Next<span class='fa fa-long-arrow-right'></span></span>");//adds new next button
		});
		$("#footer").delay(500).fadeTo (500, 1);
		$("#questionContainer").fadeTo(10, 1).fadeIn(500);
		$("<div id='userGuess' class='userGuess'>Select Icon</div><div id='guessButtonFour' class='guessButton enterKeyPress'>Submit</div>").hide().appendTo("#guessBox").delay(500).fadeIn(500);
	});

//shows warning sign if the submit button is clicked and no icon has been selected

	$(document).on('click', '#guessButtonFour', function(){
		var guess = $("#userGuess").text();
		if (guess == "Select Icon"){
			$(".warningMessage").show();
		}
	});

//right/wrong functionality

	$(document).on('click', '#guessButtonFour', function(){
		var guess = $("#userGuess").text();
		if (guess == "Energy Spider"){
			$("#guessButtonFour").remove();
			$("#nextButtonFour").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Energy Spider") {
					$("#userAnswerFour").addClass("energySpiderFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFourText").empty().append("Energy Spider");
					$("#finalFour").addClass("energySpiderFooterIMG");
					$("#finalTextFour").empty().append("Energy Spider");
				}
			});
		}
		else if (guess == "Acklay" || guess == "Boga" || guess == "Krayt Dragon" || guess == "Rishi Eel"){
			$("#guessButtonFour").remove();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#nextButtonFour").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#fact").empty().append("The correct answer was an Energy Spider. Energy spiders or spice spiders were arachnids that inhabited the spice mines of Kessel. They lived in complete darkness inside the mine's caves spinning webs made of glitterstim, a  rare kind of spice. The spiders would shoot webbing from their mouths to capture prey, impale them and then quickly suck the life energy from them. The spiders were known to feed on bogeys, as they were sources of pure energy that caused the glitterstim to react and produce light, alerting the spiders to their presence.");
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Acklay"){
					$("#userAnswerFour").addClass("acklayFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFourText").empty().append("Acklay");
					$("#finalFour").addClass("acklayFooterIMG");
					$("#finalTextFour").empty().append("Acklay");
				}
				else if (guess == "Boga") {
					$("#userAnswerFour").addClass("bogaFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFourText").empty().append("<span class = 'blackLetter'>Bo</span><span class = 'greyLetter'>g</span>a");
					$("#finalFour").addClass("bogaFooterIMG");
					$("#finalTextFour").empty().append("<span class='blackLetter'>Bo</span>ga");
				}
				else if (guess == "Krayt Dragon") {
					$("#userAnswerFour").addClass("kraytDragonFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFourText").empty().append("Krayt Dragon");
					$("#finalFour").addClass("kraytDragonFooterIMG");
					$("#finalTextFour").empty().append("Krayt Dragon");
				}
				else if (guess == "Rishi Eel") {
					$("#userAnswerFour").addClass("rishiEelFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFourText").empty().append("Rishi Eel");
					$("#finalFour").addClass("rishiEelFooterIMG");
					$("#finalTextFour").empty().append("Rishi Eel");
				}
			});
		}
	});

//Goes To Question Five
	$(document).on('click', '#nextButtonFour', function(){
		console.log("clicked");
		$("#nextButtonFour").fadeOut(500, function(){
			$("#nextButtonFour").remove();
		});
		$("#questionContainer").fadeOut(500, function(){
			$("#userGuess").remove();
			$(".borderOnClick").fadeTo(10, 1);
			$("#header").addClass("headerBountyHunters").append("Which of these beings was responsible for the creation of the Republic’s Clone Army?");
			$("#answerOne").removeClass("borderOnClick").addClass("answerOne answerOneOpacity");
				$("#imageOne").removeClass("acklayIMG").addClass("countDookuIMG");
				$("#textOne").empty().append("Count Dooku");
			$("#answerTwo").removeClass("borderOnClick").addClass("answerTwo answerTwoOpacity");
				$("#imageTwo").removeClass("bogaIMG").addClass("darthMaulIMG");
				$("#textTwo").empty().append("<span class = 'blackLetter'>D</span>arth <span class = 'blackLetter'>M</span>aul");
			$("#answerThree").removeClass("borderOnClick").addClass("answerThree answerThreeOpacity");
				$("#imageThree").removeClass("energySpiderIMG").addClass("darthRevanIMG");
				$("#textThree").empty().append("Darth Revan");
			$("#answerFour").removeClass("borderOnClick").addClass("answerFour answerFourOpacity");
				$("#imageFour").removeClass("kraytDragonIMG").addClass("obiWanKenobiIMG");
				$("#textFour").empty().append("<span class = 'blackLetter'>Obi-Wan</span> Kenobi");
			$("#answerFive").removeClass("borderOnClick").addClass("answerFive answerFiveOpacity");
				$("#imageFive").removeClass("rishiEelIMG").addClass("sifoDyasIMG");
				$("#textFive").empty().append("Sifo Dyas");
		});
		$("#absoluteMessageContainer").addClass("absoluteMessageContainerDelGormo").fadeOut(500, function(){
			$("#message").remove();
			$("#fact").remove();
			$("#messageBox").append("<span id='message' class='correctMessage'>Correct !</span><span id='fact' class='fact factCadBane questionFiveFact'>Originally envisioned by Jedi Master Sifo Dyas the clone army consisted of legions of genetically identical soldiers bred to serve the Republic. Sifo Dyas secretly commissioned the Kaminoan cloners to create an army for the Republic, however; the clones ultimately became the secret weapon of the Sith, the ancient enemies of the Jedi Order. The Sith implanted order 66 into the clone’s inhibitor chips and manipulated the Jedi into taking command of the Clone Army so that when the order was issued a simultaneous demise of the Jedi could be accomplished.</span>");
			$("#nextContainer").append("<span id='nextButtonFive' class='nextButton'>Next<span class='fa fa-long-arrow-right'></span></span>");//adds new next button
		});
		$("#footer").delay(500).fadeTo (500, 1);
		$("#questionContainer").fadeTo(10, 1).fadeIn(500);
		$("<div id='userGuess' class='userGuess'>Select Icon</div><div id='guessButtonFive' class='guessButton enterKeyPress'>Submit</div>").hide().appendTo("#guessBox").delay(500).fadeIn(500);
	});

//shows warning sign if the submit button is clicked and no icon has been selected

	$(document).on('click', '#guessButtonFive', function(){
		var guess = $("#userGuess").text();
		if (guess == "Select Icon"){
			$(".warningMessage").show();
		}
	});

//right/wrong functionality

	$(document).on('click', '#guessButtonFive', function(){
		var guess = $("#userGuess").text();
		if (guess == "Sifo Dyas"){
			$("#guessButtonFive").remove();
			$("#nextButtonFive").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Sifo Dyas") {
					$("#userAnswerFive").addClass("sifoDyasFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFiveText").empty().append("Sifo Dyas");
					$("#finalFive").addClass("sifoDyasFooterIMG");
					$("#finalTextFive").empty().append("Sifo Dyas");
				}
			});
		}
		else if (guess == "Count Dooku" || guess == "Darth Maul" || guess == "Darth Revan" || guess == "Obi-Wan Kenobi"){
			$("#guessButtonFive").remove();
			$("#message").removeClass("correctMessage").addClass("incorrectMessage").empty().append("Incorrect");
			$("#nextButtonFive").addClass("enterKeyPress");
			$("#userGuess").appendTo("#moveUserGuess").addClass("moveUserGuess");
			$("#header").empty();
			$("#fact").empty().append("The correct answer was Jedi Master Sifo Dyas. The clone army consisted of legions of genetically identical soldiers bred to serve the Republic. Sifo Dyas secretly commissioned the Kaminoan cloners to create an army for the Republic, however; the clones ultimately became the secret weapon of the Sith, the ancient enemies of the Jedi Order. The Sith implanted order 66 into the clone’s inhibitor chips and manipulated the Jedi into taking command of the Clone Army so that when the order was issued a simultaneous demise of the Jedi could be accomplished.");
			$("#absoluteMessageContainer").fadeIn(500);
			$("#questionContainer").fadeTo(500, .5);
			$("#answerOne").removeClass("answerOne answerOneOpacity");
			$("#answerTwo").removeClass("answerTwo answerTwoOpacity");
			$("#answerThree").removeClass("answerThree answerThreeOpacity");
			$("#answerFour").removeClass("answerFour answerFourOpacity");
			$("#answerFive").removeClass("answerFive answerFiveOpacity");
			$("#footer").fadeTo(500, .0, function(){
				if (guess == "Count Dooku"){
					$("#userAnswerFive").addClass("countDookuFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFiveText").empty().append("Count Dook<span class='blackLetter'>u</span>");
					$("#finalFive").addClass("countDookuFooterIMG");
					$("#finalTextFive").empty().append("Count Dooku");
				}
				else if (guess == "Darth Maul") {
					$("#userAnswerFive").addClass("darthMaulFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFiveText").empty().append("Dart<span class='blackLetter'>h</span> Maul");
					$("#finalFive").addClass("darthMaulFooterIMG");
					$("#finalTextFive").empty().append("Darth Maul");
				}
				else if (guess == "Darth Revan") {
					$("#userAnswerFive").addClass("darthRevanFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFiveText").empty().append("Darth Revan");
					$("#finalFive").addClass("darthRevanFooterIMG");
					$("#finalTextFive").empty().append("Darth Revan");
				}
				else if (guess == "Obi-Wan Kenobi") {
					$("#userAnswerFive").addClass("obiWanKenobiFooterIMG").removeClass("opacityFeature");
					$("#userAnswerFiveText").empty().append("Obi-Wan Kenobi");
					$("#finalFive").addClass("obiWanKenobiFooterIMG");
					$("#finalTextFive").empty().append("Obi-Wan Kenobi");
				}
			});
		}
	});

//Goes To Final wrap up
	$(document).on('click', '#nextButtonFive', function(){
		console.log("clicked");
		$("#nextButtonFour").fadeOut(500, function(){
			$("#nextButtonFour").remove();
		});
		$("#questionContainer").fadeOut(500, function(){
			$("#userGuess").remove();
			$(".borderOnClick").fadeTo(10, 1);
			$("#header").hide();
		});
		$("#absoluteMessageContainer").fadeOut(500, function(){
			$("#message").remove();
			$("#fact").remove();
		});
		$("#footer").delay(500).fadeTo (500, .8);
		$("#finalSumUp").delay(500).fadeIn(500);
	});

});







