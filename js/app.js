$(document).ready(function() {
	$(".button-text").on("click",function (){
	var item = $(".add-textbox").val();
	console.log(item)	
 	});
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
	var item = $(".add-textbox").val();
	console.log(item)			
	} 	
});
});