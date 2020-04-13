$("ul").on("click","li", function(){
	$(this).toggleClass("taskCompleted");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut("slow", function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input:text").keypress(function(event){
	if(event.which ===13){
		var inputValue = this.value;
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>"+inputValue+"</li>");
		this.value = "";
	}
});

$(".fa-plus").on("click", function(){
	$("input:text").fadeToggle("slow");
});

