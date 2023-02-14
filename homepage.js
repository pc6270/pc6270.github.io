// var ticker = document.querySelector(".ticker");
// var list = document.querySelector(".ticker__list");
// console.log(list);
// var clone = list.cloneNode(true);

// ticker.append(clone);

// Get the button:
let mybutton = document.getElementById("back2top");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var body = $("html, body");

   //  document.body.scrollTop = 0; // For Safari
  	// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           // console.log("Animation has finished");
    });
}