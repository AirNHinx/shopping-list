$(document).ready(function() {
	$("li").hide();
	$(".check-button").hide();
	$(".delete-button").hide();
	$(".button-text").on("click", additem);
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
		additem()
}
});
	function additem() {
	var item = $(".add-textbox").val();
	console.log(item);
	$("li").show();	
	$("li").append(item);
	$(".check-button").show();
	$(".delete-button").show();
}

});


