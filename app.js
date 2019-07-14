/*var newButton = $("#searcBar").val();
What else do I need to make this grab the value of the text input and make it into a button?
*/
$(document).ready(function() {
    var topics = [];
    for(i = 1; i <=10; i++) {
       $('<button/>', {
          text: i,
          id: 'btn_'+i,
      });
    }
  
  (topics).push("input");
  $( "button" ).attr( "gifID" );

//pause function that doesn't work. Sable told me something about making 2 seperate variables out of the ajax query url, but didn't have time to experiment with that properly 
$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  
  $("button").on("click", function() {
    var buttonObject = $(this).attr("gifID");
    var queryURL2 = "https://api.giphy.com/v1/gifs/search?q=" +
      buttonObject + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL2,
      method: "GET"
    })
      
      .then(function(response) {
        console.log(queryURL2);

        console.log(response);
        
        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var gif = $("<img>");
          
          gif.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(gif);

          $("#gifs").prepend(gifDiv);
        }
      });
    });
});