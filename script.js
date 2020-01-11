$(document).ready(function() 
{
    var myCardContent = $(".card-text");
    var myCardTitle = $(".card-title")
    var startButton = $("#startButton");
    var  myListContainer= $("<ol>");
    var itemAnchor = $("<a>");
    var myCard = $("#myCard");
    var timeLeft = 0;
    var penalty = 5;
    var score;
    $(".timerCount").text(timeLeft);
     function myTimer()
     {
         timeLeft = 70;
         score =  setInterval( function()
         {
            $(".timerCount").text(timeLeft)
            timeLeft--;
         }, 1000)
     }
    
    
    

    //myCardTitle.empty();
    //myCardContent.empty();
    //myCard.empty();
    var startButton = $("#startButton");

    var questions = [
        {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings ", "booleans ", "alerts ", "numbers"],
        answer: "alerts"
        },
        {
        title: "Which of the following is correct?",
        choices: ["jquery is javascript library", "form of JSON", "Programming language", "none of the above"],
        answer: "jquery is javascript library"
        },
        {
        title: "Choose the correct HTML element for the largest heading:",
        choices: ["h6", "important", "strong", "h1"],
        answer: "h1"
        },
        {
        title: "What does CSS stand for?",
        choices: ["creative style sheet", "colorful style sheet", "cascading style sheet", "computer style sheet"],
        answer: "cascading style sheet"
        },
        {
            title: "Which class provides a responsive fixed width container?",
            choices: [".container", ".container fluid ", ".container fixed ", "..container"],
            answer: ".container fluid"
            }

        ///etc.
    ];
    var qIndex = 0;
    startButton.on("click", function()
    {
        myTimer();
        startButton.hide();        
        testQ(myCardTitle, qIndex, 
            myCardContent, myListContainer);
    });
    //
    function testQ(newCardTitle, newIndex,
                 newCardContent, newListContainer)
    {
        newCardTitle.text(questions[newIndex].title);
        //console.log("index used in testQ" + newIndex);
        var listArray = questions[newIndex].choices;
        for( var i = 0; i < listArray.length; i++)
        {
            newCardContent.append(newListContainer);
            var itemAnchor = $("<a>");    
            itemAnchor.attr("href", "#");
            itemAnchor.addClass("myAnch");
            var listItem = $("<li>");
            listItem.addClass("myLi");
            newListContainer.append(listItem);
            listItem.append(itemAnchor);
            itemAnchor.text(listArray[i]);
        }

    }
    //myListContainer.on("click", function caller()
    $(".stepping").on("click", function caller()
    {
        //var clicked_element_text = $(this).text();
        var userTarget = $(event.target);
        myCardTitle.empty();
        myCardContent.empty();
        //myHR.empty();
        //feedBackScreen.empty();
        var cardContent = $(".card-text");
        var cardTitle = $(".card-title");
        //var startButton = $("#startButton");
        var  listContainer = $("<ol>");
        qIndex++;
        //console.log("index sent to testQ" + qIndex);
        //testQ(cardTitle, qIndex, cardContent, listContainer);
        //testQ(cardTitle, qIndex, cardContent, listContainer);
        var yourAsnwer = (userTarget.text()).trim();
        var myHR = $("<hr>");
        var feedBackScreen = $("<p>");
        feedBackScreen.addClass("feedBack");
        //feedBackScreen.addClass("feedBack");
        //this.append(feedBackScreen);
        console.log(yourAsnwer);
        if(qIndex === questions.length)
        {
            if (yourAsnwer === questions[qIndex-1].answer)
            {
                feedBackScreen.text("Correct!");
                console.log("This is Correct");
                done();
            }
            else
            {
                feedBackScreen.html("Wrong");
                console.log("Thi is Wrong!");
                timeLeft = timeLeft-penalty;
                console.log(timeLeft);
                console.log("Correct Answer: " + questions[qIndex-1].answer);
                done();
            }
        }
        else
        {
            if (yourAsnwer === questions[qIndex].answer)
            {
                feedBackScreen.text("Correct!");
                console.log("Correct");
            }
            else
            {
                feedBackScreen.html("Wrong");
                console.log("Wrong!");
                timeLeft = timeLeft-penalty;
                console.log("Correct Answer: " + questions[qIndex].answer)
            }
            testQ(cardTitle, qIndex, cardContent, listContainer);
        
            myCardContent.append(myHR);
            myCardContent.append(feedBackScreen);
        }

        
        
        
    });
    var userScore;
    var userInitialData;
    var highSCore = [];

    function done()
    {
        clearInterval(score);
        $(".timerCount").text(timeLeft);
        userScore = timeLeft;
        highSCore.push(userScore);
        console.log("array " + highSCore);
        localStorage.setItem("score", JSON.stringify(highSCore));
        var test = [];
        test = localStorage.getItem("score");
        test = JSON.parse(localStorage.getItem("score"));
        for (var i = 0; i<test.length; i ++)
        {
            console.log("testing local storage " + test[i]);
        }
        //highSCore.push(userScore);
        $(".card-body").empty();
        //myCardTitle.empty();
//         names[0] = prompt("New member name?");
//         localStorage.setItem("names", JSON.stringify(names));

// //...
//         var storedNames = JSON.parse(localStorage.getItem("names"));
        //myCardTitle.off("click");
        //myCardContent.empty();
        //myListContainer.off("click");
        


        console.log("Final score" + timeLeft);
        var newTitle = $("<h5>");
        newTitle.addClass("myform");
        var myP = $("<h6>");
        myP.text("Your score is: " + timeLeft);
        myP.addClass("myform");
        var myform = $("<form>");
//
       
////
        myform.addClass("myformText");
        var userInitial = $("<input>");
        userInitial.addClass("myInput");
        var submit = $("<input>");
        submit.attr("type", "submit");
        submit.addClass("mySubmit");
        userInitial.attr("type", "text");
        myform.html("<span>Enter your initial: </span>");
        myform.append(userInitial);
        newTitle.html("All Done!");
        //myCard.append(newTitle);
        $(".card-body").append(newTitle);
        //myCard.append(myP);
        $(".card-body").append(myP);
        myform.append(submit);
        //myCard.append(myform);
        $(".card-body").append(myform);
        //submit.on("click", scoreBoard ());
        //$(".mysubmit").on("click", scoreBoard ());
        $(".myformText").on("click", function(event)
        {
            event.preventDefault();
            if(event.target.matches(".mySubmit"))
            {
                //scoreBoard ();
                userInitialData = userInitial.val();
                localStorage.setItem("initial", userInitialData);
                console.log("Your initial is: " + userInitialData);
                scoreBoard ();
        
            }
            
        });
        //userInitialData = userInitial.val();
        //console.log("Your initial is" + userInitialData)


    }

    function scoreBoard(){
        $(".card-body").empty();
        //var temp = localStorage.getItem("score");
        if (userScore > highSCore)
        {
            var temp = highSCore;
            highSCore = userScore;

        }
        //highSCore = localStorage.setItem("highscore", timeLeft);
        //var testHS = localStorage.getItem("highscore", timeLeft);
        console.log("high score from local storage: " + highSCore);


        var scoreTitle = $("<h5>");
        scoreTitle.addClass("textColor");
        scoreTitle.text("High Score");
        var scoreP = $("<h6>");
        scoreP.addClass("textColor");
        var scoreButton = $("<div>");
        var button1 = $("<button>");
        button1.addClass("button1");
        var button2 = $("<button>");
        button2.addClass("button2");
        var initialtOut = localStorage.getItem("initial");
        var scoreOut = highSCore;
        scoreP.text(localStorage.getItem("initial") + "-" + scoreOut);
        console.log(initialtOut + "-" + scoreOut);
        button1.text("Go back");
        button2.text("Clear score");
        scoreButton.append(button1, button2);
        $(".card-body").append(scoreTitle, scoreP, scoreButton);
        //html(newCard);
        //myCard.append(scoreP);
        button1.on("click", function ()
        {
            location.reload();
        });

        button2.on("click", function ()
        {
            localStorage.clear();
            scoreP.text("");
        });
    }
    $("#highScoreAnch").on("click", function (){
        scoreBoard();
    })
});