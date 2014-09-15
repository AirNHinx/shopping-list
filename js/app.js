$(document).ready(function() {
	$(".button-text").on("click", additem);
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
		additem()
}
});
	function additem() {
	var item = $(".add-textbox").val();
	console.log(item)
	item.appendTo($("li"));
}

});


