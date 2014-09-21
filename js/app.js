$(document).ready(function() {
	$(".lower-page").hide();
	$("li").hide();
	$(".add-textbox").on("keypress",function(event){
		if (event.which == 13) {
		$(".lower-page").show();
		additem();
	}
	$(".button-text").on("click", additem);
		$(".lower-page").show();
		additem();
});
	function additem() {
	var item = $(".add-textbox").val();
	var clone1 = '<li>';
	var clone2 = '<div class="check-button action-complete"><a href="#">';
	var clone3 = '<img class="item-buttons action-complete" src="images/blue-check.png"/></a></div>';
	var clone4 = '<div class="delete-button action-delete"><a href="#"><img class="item-buttons action-delete" src="images/x.png"/></a></div>';
	console.log(item);
	$(".lower-page").show();
	$("li").show();	
	$("ol").append(clone1+item+clone2+clone3+clone4);
	$(".add-textbox").val("");
}
   $("ol.items").on("click", function(event) {
   var t = $(event.target);
   console.log(t);
   console.log(t.hasClass("action-complete"));
   if(t.hasClass("action-complete")) {
   		console.log("action-complete");
   	$(this).parents().closest("li").toggleClass("strikethrough");	
   } else if(t.hasClass("action-delete")) {
   		console.log("action-delete");
   		/*$(".action-delete").parents().remove();
   		/*remove the li from the DOM (.remove)*/
   		/*use .parents to find the nearest li so we can act on them*/
   }
});


});


