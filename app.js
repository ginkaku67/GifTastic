/*var newButton = $("#searcBar").val();
I need to write a function that will take the contents of the search bar and add it as a button with it's own 
*/
$( "input" ).on( "blur", function() {
    $( this ).val(function( i, val ) {
      return val().trim();
    });
  });

//pause function
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
    // Grabbing and storing the data-animal property value from the button
    var buttonObject = $(this).attr("gifID");

    // Constructing a queryURL using the animal name
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

          var animalImage = $("<img>");
          
          animalImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(animalImage);

          $("#gifs").prepend(gifDiv);
        }
      });
    });
;