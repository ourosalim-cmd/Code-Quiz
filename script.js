
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
        title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
        },
        {
        title: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "quotes"
        },
        {
        title: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
        },

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
    

        if(qIndex === questions.length-1)
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



            //myListContainer.on("click", 
            clearInterval(score);
            //testQ(cardTitle, qIndex, cardContent, listContainer);
            
            //return; //testQ(cardTitle, qIndex, cardContent, listContainer);
            //return;// testQ(cardTitle, qIndex, cardContent, listContainer);
        }
        testQ(cardTitle, qIndex, cardContent, listContainer);
        
        myCardContent.append(myHR);
        myCardContent.append(feedBackScreen);
        
    });
});
