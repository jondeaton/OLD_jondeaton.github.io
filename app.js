// JavaScritp functions
var name_button_click = function() {
    var user_name = prompt("Enter your name below");
    if (user_name != "") {
        document.getElementById("name_text").textContent = "Your name is " + user_name;
    }
};

var refresh_numbers = function() {
	var num_new_digits = parseInt($("#num_digits_entry_text").val());
    var new_numbers = generate_new_numbers(num_new_digits);
    document.getElementById("numbers_text").textContent = new_numbers;
};

var generate_new_numbers = function(num_digits) {
    // This function generates a string of digits that are num_digits long
    var new_numbers = "";
    for(var i=0; i < num_digits; i++){
        var new_digit = Math.floor(10 * Math.random());
        new_numbers = new_numbers + new_digit.toString();
    }
    return new_numbers;
};

var get_words_for_number = function(number) {
    var address = "http://major-system.info/en/?n=" + number;
    return "This feature is not yet implemented";
};



var query_number = function() {
    var number = $("#query_number_entry_text").val();
    var words_text = get_words_for_number(number);
    document.getElementById("query_response").textContent = words_text;
};

// Function for opening a pdf
function openPdf(e, path, redirect) {
    // stop the browser from going to the href
    e = e || window.event; // for IE
    e.preventDefault();

    // launch a new window with your PDF
    window.open(path, 'somename', ... /* options */);

    // redirect current page to new location
    window.location = redirect;
}


var main = function() {
	console.log("main function called");

    $("#name_button").click(name_button_click);
    $("#new_numbers_button").click(refresh_numbers);
    $("#query_number_button").click(query_number)


	$(".dropdown-toggle").click(function(){
    	$(".dropdown-menu").toggle();
  	});


  	$('.icon-menu').click(side_bar_pop_up);
    $('.icon-close').click(side_bar_hide);

    var side_bar_pop_up = function(){
        $('.menu').animate({left: '0px'}, 200);
        $('body').animage({left: '285px'}, 200);
    }

    var side_bar_hide = function(){
        $('.menu').animate({left: '-285px'}, 200);
        $('body').animate({left: '0px'}, 200);
    }

    console.log("main function run successfully");
}

$(document).ready(main);