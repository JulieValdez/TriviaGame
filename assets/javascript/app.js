// game starts with title of game on screen and the start button
// quiz and counter and done button are hidden from screen at beginning
// user clicks on start button and renders quiz
// start button disappears
// questions appear
// answers appear
// timer starts
// user chooses answers to each question
// user clicks on "done" button
// quiz hides
// score of quiz in displayed

$(document).ready(function() {
  $("#timer").hide();
  $("#quizRendered").hide();
  $("#done-button").hide();
  $("#score-display").hide();

  var intervalId;
  var clockRunning = false;
  var right = 0;
  var wrong = 0;
  var time = 120;

  function timerStart() {
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function timerStop() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }
  function count() {
    // countdown from 120 seconds decrement time
    time--;

    // DONE: time converter function taken from stopwatch exercise Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);

    // timer needs to stop when it gets to 0
    if (time === 0) {
      timerStop();
    }
  }
  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "0";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
  var questions = [
    {
      question: "What is the name of the main villain in Die Hard?",
      answers: ["Hans", "Franz", "Karl", "Klaus"],
      correctAnswer: "Hans"
    },
    {
      question:
        "Who authored the Bourne series of books the movies are based on?",
      answers: [
        "Tom Clancy",
        "Robert Ludlum",
        "George R.R. Martin",
        "John Grisham"
      ],
      correctAnswer: "Robert Ludlum"
    },
    {
      question: "How many Fast & Furious movies have been made?",
      answers: ["8", "10", "6", "13"],
      correctAnswer: "13"
    },
    {
      question: "What kind of car does John Wick drive?",
      answers: ["Mustang", "Camaro", "Corvette", "GTO"],
      correctAnswer: "Mustang"
    },
    {
      question: "How many actors have played Jack Ryan?",
      answers: ["3", "6", "5", "4"],
      coorectAnswer: "5"
    },
    {
      question: "Is Die Hard a Christmas movie?",
      answers: [
        "Yes",
        "No",
        "There is too much controversy around this question for me to answer."
      ],
      correctAnswer: "Yes"
    }
  ];

  // FUNCTIONS///////////////////
  // function to start game when the user clicks on the start button, this should hide the start button and have the quiz div appear
  //  dynamically loop through the array and create table rows for question and table cell for answers

  //click on start button starts game
  $("#start-button").on("click", function() {
    console.log("clicked");
    $(this).hide();
    $("#quizRendered").show();
    $("#timer").show();
    $("#done-button").show();
    timerStart();
    renderQuiz();
  });

  function renderQuiz() {
    for (let i = 0; i < questions.length; i++) {
      console.log(questions[i]);
      var questionRow = $("<h3>");
      questionRow.addClass("question");
      questionRow.text(questions[i].question);
      $("#quizRendered").append(questionRow);

      questions[i].answers.forEach(answer => {
        console.log(answer);
        var answerRow = $("<input>");
        answerRow.attr("type", "radio");
        answerRow.attr("name", "answer" + [i]);
        answerRow.attr("namedata", answer);
        var label = $("<label>");
        label.text(answer);
        $("#quizRendered").append([answerRow, label]);
      });
    }
  }

  // function to take in each checked answer and compare to correctanswer and update right and wrong count
  // needs to loop through the array of correct answers
  // variable for the value of checked radion buttons
  // compare value to answers
  // update right and wrong

  $("#done-button").on("click", function() {
    $("#quizRendered").hide();
    $("#timer").hide();
    $("#done-button").hide();
    $("#score-display").show();
    timerStop();
    //   questions[i].correctAnswer.forEach();
    //   var radioValue = $("input[name='answer']:checked").val();
    //   if (radioValue === correctAnswer) {
    //     right++;
    //     console.log(right);

    //     $("#correct-answers").text("Correct: " + right);
    //   } else {
    //     wrong++;
    //     console.log(wrong);

    //     $("#incorrect-answers").text("InCorrect: " + wrong);
    //   }
  });
});
