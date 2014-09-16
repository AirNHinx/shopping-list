$(document).ready(function() {
	$(".lower-page").hide();
	$("li").hide();
	$(".button-text").on("click", additem);
	$(".add-textbox").on("keypress",function(event){
	if (event.which == 13) {
		additem()
		$(".lower-page").show();	
}
});
	function additem() {
	var item = $(".add-textbox").val();
	var clone1 = '<li>';
	var clone2 = '<div class="check-button action-complete"><a href="#"><img class="item-buttons action-complete" src="images/blue-check.png"/></a></div><div class="delete-button action-delete"><a href="#"><img class="item-buttons action-delete" src="images/x.png"/></a></div>';
	console.log(item);
	$(".lower-page").show();
	$("li").show();	
	$("ol").append(clone1+item+clone2);
	$(".add-textbox").val("");
}
   $("ol.items").on("click", function(event) {
   var t = $(event.target);
   console.log(t);
   console.log(t.hasClass("action-complete"));
   if(t.hasClass("action-complete")) {
   		console.log("action-complete");
   	$(".action-complete").parents().addClass("strikethrough");	
   } else if(t.hasClass("action-delete")) {
   		console.log("action-delete");
   		/*$(".action-delete").parents().remove();
   		$(".lower-page").hide();*/
   		/*remove the li from the DOM (.remove)*/
   		/*use .parents to find the nearest li so we can act on them*/
   		  if(t.hasClass("strikethrough")) {
   		console.log("action-complete");
   	$(".action-complete").parents().removeClass("strikethrough");	
   } 
   }
});


});


