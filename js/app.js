$(document).ready(function() {
	//$(".lower-page").hide();
	//$("li").hide();
	//$(".check-button").hide();
	//$(".delete-button").hide();
	$(".button-text").on("click", additem);
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
		additem()	
}
});
	function additem() {
	var item = $(".add-textbox").val();
	var clone1 = '<li>';
	var clone2 = '<div class="check-button" style="display: none;"><a href="#"><img class="item-buttons" src="images/blue-check.png"></a></div><div class="delete-button" id=" item-buttons""="" style="display: none;"></div></li>';
	console.log(item);
	//$(".lower-page").show();
	//$("li").show();	
	$("ol").append(clone1+item+clone2);
	//$(".check-button").show();
	//$(".delete-button").show();
}
	function addanother() {
	var item = $(".add-textbox").val();
	console.log(item);
	$("li").append("<li>"+ item + "</li>");
	//$(".check-button").show();
	//$(".delete-button").show();
	}
	console.log(item);
});


