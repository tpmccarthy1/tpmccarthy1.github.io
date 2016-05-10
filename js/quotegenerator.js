//Function to assign random color to element

function ranCol(id, id2) { //function name
  var foo = document.getElementById(id);
  var foo2 = document.getElementById(id2)
  var color = '#'; // hexadecimal starting symbol
  var letters = ['0E3F4D', '011920', '265B6A', '552B00', '7D4813']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  foo.style.background = color;
  foo2.style.color = color; // Setting the random color on your div element.
}

//Init variables to store quote and author

var currentQuote = '',
    currentAuthor = '';

//Request random quote from API, assign the key to variables, display content on DOM 

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "DyHpKn35aPmshImOA0PBkzpKrstbp1k7BcXjsnOvCITSRjIl39",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author; {
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?  hashtags=quotes&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      }
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(r.quote);
        });
      $(".quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').text("- " + r.author);
        });

    }
  })
}

//Function to display new quote

function quoteDisplay() {
  getQuote();
  ranCol('body', 'quote');
}

//Function to hook up button to diplsay new quote

$(document).ready(function() {
  quoteDisplay();
  $('#new-quote').on('click', quoteDisplay);
})