(function() {
	"use strict";

	$(".style-picker").on("click", "> div", function (e) {
		var $el = $(e.currentTarget),
			id = $el.data("itemId"),
			$parent = $el.closest(".styles");

		$parent.children(".style").hide();
		$parent.children(".style[data-item-id=" + id + "]").show();
	});
})();


var colors = ["#2ecc71","#3498db","#9b59b6", "#f1c40f", "#e67e22", "#e74c3c"];                
var rand = Math.floor(Math.random()*colors.length);
$('header').css({"background":colors[rand]});
$('h4 a').css({"color":colors[rand]});
$('li pi a').css({"color":colors[rand]});
$('button').css({"background":colors[rand]});
$('.product-container .product-details h4').css({"color":colors[rand]});

