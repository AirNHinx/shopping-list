$(document).ready(function() {
	$(".lower-page").hide();
	$("li").hide();
	$(".button-text").on("click", additem);
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
		additem()	
}
});
	function additem() {
	var item = $(".add-textbox").val();
	var clone1 = '<li>';
	var clone2 = '<div class="check-button"><a href="#"><img class="item-buttons" src="images/blue-check.png"/></a></div><div class="delete-button"><a href="#"><img class="item-buttons" src="images/x.png"/></a></div>';
	console.log(item);
	$(".lower-page").show();
	$("li").show();	
	$("ol").append(clone1+item+clone2);
	$(".add-textbox").val("");
}

});


