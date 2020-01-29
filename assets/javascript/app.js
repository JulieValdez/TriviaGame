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
  $("#quizRendered").hide;
  var right = 0;
  var wrong = 0;
  var counter = 120;
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
    $("#start-button").hide;
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
        answerRow.attr("data-answer", answer);
        var label = $("<label>");
        label.text(answer);
        $("#quizRendered").append([answerRow, label]);
      });

    }
  }




  renderQuiz();
  // function to take in each checked answer and compare to correctanswer and update right and wrong count
});
